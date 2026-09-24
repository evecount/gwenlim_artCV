/**
 * Web Audio API synthesizer for installation acoustic documentation
 * Synthesizes installation acoustic signatures (CRT scanline whine, transformer sub-bass, relay click)
 */

class InstallationAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private activeOscillator: OscillatorNode | null = null;
  private activeGain: GainNode | null = null;
  private activeFilter: BiquadFilterNode | null = null;
  private isPlaying = false;
  private currentType: string | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playSignature(type: 'transformer-drone' | 'crt-high-frequency' | 'solenoid-relay' | 'optical-hum', baseFreq = 55): boolean {
    this.initContext();
    if (!this.ctx) return false;

    this.stop();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    switch (type) {
      case 'transformer-drone': {
        // Deep 55Hz sub-harmonic drone with periodic modulation
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(baseFreq, now);
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, now);
        filter.Q.setValueAtTime(4, now);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.exponentialRampToValueAtTime(0.2, now + 0.3);
        break;
      }
      case 'crt-high-frequency': {
        // NTSC flyback transformer 15.734 kHz whine + 60Hz hum
        osc.type = 'sine';
        // Keep slightly audible for varied audio equipment (safe hearing range around 11-13kHz if 15.7kHz clips)
        osc.frequency.setValueAtTime(Math.min(baseFreq, 12000), now);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(Math.min(baseFreq, 12000), now);
        filter.Q.setValueAtTime(8, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.06, now + 0.2);
        break;
      }
      case 'optical-hum': {
        // 60Hz / 120Hz transformer dimmer filament vibration
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(baseFreq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(260, now);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.exponentialRampToValueAtTime(0.18, now + 0.2);
        break;
      }
      case 'solenoid-relay': {
        // Shutter snap click followed by quick capacitor charge
        osc.type = 'square';
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.08);

        filter.type = 'highpass';
        filter.frequency.setValueAtTime(300, now);

        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        
        // Auto reset state for single click
        setTimeout(() => {
          this.isPlaying = false;
        }, 300);
        break;
      }
    }

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);

    this.activeOscillator = osc;
    this.activeGain = gain;
    this.activeFilter = filter;
    this.isPlaying = true;
    this.currentType = type;
    return true;
  }

  public stop() {
    if (this.activeGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.activeGain.gain.setValueAtTime(this.activeGain.gain.value, now);
        this.activeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
        setTimeout(() => {
          if (this.activeOscillator) {
            try {
              this.activeOscillator.stop();
              this.activeOscillator.disconnect();
            } catch {
              // Ignore already stopped
            }
          }
        }, 120);
      } catch {
        // Safe disconnect
      }
    }
    this.isPlaying = false;
    this.currentType = null;
  }

  public getIsPlaying(type?: string): boolean {
    if (!type) return this.isPlaying;
    return this.isPlaying && this.currentType === type;
  }
}

export const soundEngine = new InstallationAudioSynthesizer();
