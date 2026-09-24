import React, { useState } from 'react';
import { Artwork, SystemNode } from '../types/portfolio';

interface SystemSchematicProps {
  artwork: Artwork;
}

export const SystemSchematic: React.FC<SystemSchematicProps> = ({ artwork }) => {
  const [selectedNode, setSelectedNode] = useState<SystemNode | null>(
    artwork.schematicNodes[0] || null
  );

  const getNodeColor = (type: SystemNode['type']) => {
    switch (type) {
      case 'participant':
        return 'border-amber-400 bg-amber-50/80 text-amber-950';
      case 'optic':
        return 'border-cyan-500 bg-cyan-50/80 text-cyan-950';
      case 'processing':
        return 'border-blue-500 bg-blue-50/80 text-blue-950';
      case 'actuation':
        return 'border-emerald-500 bg-emerald-50/80 text-emerald-950';
      case 'input':
        return 'border-purple-500 bg-purple-50/80 text-purple-950';
      default:
        return 'border-neutral-300 bg-neutral-50 text-neutral-900';
    }
  };

  const getNodeBadge = (type: SystemNode['type']) => {
    switch (type) {
      case 'participant':
        return 'HUMAN / SPECTATOR';
      case 'optic':
        return 'OPTICAL APPARATUS';
      case 'processing':
        return 'COMPUTATIONAL DAEMON';
      case 'actuation':
        return 'PHYSICAL ACTUATION';
      case 'input':
        return 'SENSOR INTERFACE';
      default:
        return 'NETWORK NODE';
    }
  };

  return (
    <div className="bg-neutral-50 border border-neutral-250 rounded-lg p-4 sm:p-5 text-neutral-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-neutral-200 gap-2">
        <div>
          <span className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest block font-semibold">
            Technical Architecture & Rig Topology
          </span>
          <h4 className="text-sm sm:text-base font-mono-code font-bold text-neutral-950">
            {artwork.schematicTitle}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono-code text-neutral-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> Human
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600" /> Compute
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-600" /> Optics
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" /> Output
          </span>
        </div>
      </div>

      {/* Nodes interactive flow track */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {artwork.schematicNodes.map((node, idx) => {
            const isSelected = selectedNode?.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`text-left p-3 rounded-lg border transition-all cursor-pointer relative group ${
                  isSelected
                    ? 'ring-2 ring-neutral-900 shadow-sm ' + getNodeColor(node.type)
                    : 'border-neutral-200 bg-white hover:bg-neutral-100 hover:border-neutral-350 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-mono-code uppercase tracking-wider text-neutral-500 font-semibold">
                    Node {idx + 1} · {getNodeBadge(node.type)}
                  </span>
                  {node.spec && (
                    <span className="text-[9px] font-mono-code text-neutral-500 truncate max-w-[110px]">
                      {node.spec}
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono-code font-bold text-neutral-950 group-hover:text-neutral-700">
                  {node.label}
                </div>
                <p className="text-[11px] text-neutral-600 mt-1 line-clamp-2 leading-relaxed font-sans">
                  {node.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Node Detailed Inspector */}
        {selectedNode && (
          <div className="p-3.5 bg-white border border-neutral-300 rounded-lg text-xs font-mono-code text-neutral-800 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-neutral-200">
              <span className="font-bold text-neutral-950 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                {selectedNode.label}
              </span>
              <span className="text-[10px] text-neutral-500 font-semibold">
                Specification: {selectedNode.spec || 'Standard Interface'}
              </span>
            </div>
            <p className="text-neutral-700 text-xs leading-relaxed font-sans">
              {selectedNode.description}
            </p>
          </div>
        )}

        {/* Signal Routing & Bus Protocols */}
        <div className="pt-2 border-t border-neutral-200">
          <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-500 font-semibold block mb-2">
            Inter-Node Protocols & Bus Latencies
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono-code">
            {artwork.schematicConnections.map((conn, i) => {
              const sourceNode = artwork.schematicNodes.find(n => n.id === conn.from);
              const targetNode = artwork.schematicNodes.find(n => n.id === conn.to);
              return (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 rounded bg-white border border-neutral-250 shadow-xs"
                >
                  <div className="flex items-center gap-1.5 text-neutral-800 truncate">
                    <span className="text-neutral-600">{sourceNode?.label || conn.from}</span>
                    <span className="text-neutral-400">→</span>
                    <span className="text-neutral-950 font-medium">{targetNode?.label || conn.to}</span>
                  </div>
                  <div className="flex items-center gap-2 text-right shrink-0">
                    <span className="text-neutral-500 text-[10px]">{conn.protocol}</span>
                    {conn.latency && (
                      <span className="text-blue-700 text-[10px] font-bold">
                        [{conn.latency}]
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
