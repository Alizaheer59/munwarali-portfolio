import React, { useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

export default function TerminalPanel({ logs }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="terminal-panel rounded-xl flex flex-col h-full overflow-hidden font-mono text-sm">
      <div className="flex items-center space-x-2 px-4 py-2 border-b border-[#0066ff]/30 bg-[#0066ff]/5">
        <TerminalIcon size={16} className="text-[#0066ff]" />
        <span className="text-[#0066ff] font-semibold tracking-wider">SYS_LOGS</span>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2">
        {logs.map((log, index) => (
          <div key={index} className={`flex ${log.type === "error" ? "text-red-400" : log.type 
=== "system" ? "text-gray-400" : log.type === "user" ? "text-[#00f0ff]" : "text-[#0066ff]"}`}>
            <span className="opacity-50 mr-3">[{log.time}]</span>
            <span className="break-words flex-1">{log.message}</span>
          </div>
        ))}
        {logs.length 
=== 0 && <div className="text-gray-600 italic">No logs initialized...</div>}
      </div>
    </div>
  );
}
