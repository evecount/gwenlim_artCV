import { useEffect, useRef } from "react";

const INK = "26, 26, 26";
const ACCENT = "#B23A2E";

/**
 * Graphical representation for The Riemann Manifold — recreated from the
 * original ArtworkVisualPlate canvas (undulating Riemannian manifold surface,
 * eigenvalue node cluster, obsidian projection plinth), redrawn in the
 * monograph palette: ink lines on gallery paper with the single red accent.
 */
export function RiemannManifoldFigure({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let frame = 0;

    const render = () => {
      frame += 0.02;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Subtle coordinate grid
      ctx.strokeStyle = `rgba(${INK}, 0.07)`;
      ctx.lineWidth = 0.5;
      const step = 28;
      for (let x = 0; x <= width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Undulating Riemannian manifold surface lines
      const cx = width / 2;
      const cy = height / 2 + 10;
      const lines = 14;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${INK}, ${i % 2 === 0 ? 0.55 : 0.28})`;
        ctx.lineWidth = 1;
        const yOffset = (i - lines / 2) * 12;
        for (let x = -width / 2; x < width / 2; x += 10) {
          const dist = Math.sqrt(x * x + yOffset * yOffset);
          const z = Math.sin(dist * 0.04 - frame) * 22 * Math.cos(x * 0.02 + frame * 0.5);
          const screenX = cx + x;
          const screenY = cy + yOffset + z;
          if (x === -width / 2) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.stroke();
      }

      // High-dimensional eigenvalue node cluster
      const nodeCount = 9;
      for (let n = 0; n < nodeCount; n++) {
        const angle = (n / nodeCount) * Math.PI * 2 + frame * 0.3;
        const radius = 70 + Math.sin(frame * 2 + n) * 35;
        const nx = cx + Math.cos(angle) * radius;
        const ny = cy + Math.sin(angle) * (radius * 0.55);

        ctx.fillStyle = n === 0 ? ACCENT : `rgba(${INK}, 0.75)`;
        ctx.beginPath();
        ctx.arc(nx, ny, n === 0 ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(${INK}, 0.12)`;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.stroke();
      }

      // Obsidian projection plinth silhouette
      ctx.fillStyle = `rgba(${INK}, 0.06)`;
      ctx.strokeStyle = `rgba(${INK}, 0.55)`;
      ctx.lineWidth = 1;
      const pw = 120;
      const ph = 40;
      ctx.fillRect(cx - pw / 2, height - ph - 16, pw, ph);
      ctx.strokeRect(cx - pw / 2, height - ph - 16, pw, ph);

      raf = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} width={640} height={380} className={className} />;
}
