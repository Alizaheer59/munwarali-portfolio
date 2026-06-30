import React from "react";
import { Activity, GitMerge, Cpu } from "lucide-react";

export default function ManagerDashboard({ isProcessing }) {
  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col h-full">
      <div className="flex items-center space-x-3 mb-6">
        <Cpu className="text-[#00f0ff]" size={28} />
        <h2 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff] uppercase tracking-widest">
          Manager View
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 flex-1">
        {/* Active Tasks Module */}
        <div className="bg-[#050508]/50 rounded-xl p-4 border border-white/5">
          <div className="flex items-center space-x-2 mb-4 text-[#00f0ff]">
            <Activity size={20} />
            <h3 className="font-semibold tracking-wide">ACTIVE TASKS</h3>
          </div>
          <div className="space-y-3">
            {isProcessing ? (
              <div className="flex items-center space-x-3 bg-[#0066ff]/10 p-3 rounded-lg border border-[#0066ff]/30">
                <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></div>
                <span className="text-sm text-blue-100">Processing input sequence...</span>
              </div>
            ) : (
              <div className="text-gray-500 text-sm italic">System idle. Awaiting input.</div>
           )}
            <div className="flex items-center space-x-3 bg-white/5 p-3 rorder border-white/5">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-300">Environment checks passed</span>
            </div>
          </div>
        </div>

        {/* Code Diffs Module Placeholder */}
        <div className="bg-[#050508]/50 rounded-xl p-4 border border-white/5 flex-1 flex flex-col">
          <div className="flex items-center space-x-2 mb-4 text-[#0066ff]">
            <GitMerge size={20} />
            <h3 className="font-semibold tracking-wide">VISUAL CODE DIFFS</h3>
          </div>
          <div className="flex-1 flex items-center justify-center border border-dashed border-[#0066ff]/20 rounded-lg bg-[#0066ff]/5">
            <span className="text-gray-500 font-mono text-sm">No active code changes detected.</span>
          </div>
        </div>
      </div>
    </div>
  ); }
