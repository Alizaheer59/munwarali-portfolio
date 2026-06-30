import React from "react";
import HologramRing from "./HologramRing";
import VoiceControl from "./VoiceControl";

export default function EditorView({ chatHistory, isListening, isProcessing, onTranscript, isSpeaking }) {
  return (
    <div className="glass-panel rounded-2xl flex flex-col h-full relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="p-6 flex-1 flex flex-col items-center justify-center space-y-12 z-10">
        <HologramRing isListening={isListening} isProcessing={isProcessing} />
        <VoiceControl onTranscript={onTranscript} isSpeaking={isSpeaking} />
      </div>

      {/* Chat History Overlay */}
      <div className="h-48 border-t border-white/5 bg-black/40 backdrop-blur-md p-4 overflow-y-auto z-10 flex flex-col-reverse">
        <div className="space-y-4 flex flex-col">
          {chatHistory.map((msg, i) => (
            <div key={i} className={`flex ${msg.role 
=== "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] p-3 rounded-xl ${msg.role 
=== "user" ? "bg-[#0066ff]/20 border border-[#0066ff]/30 text-blue-50" : "bg-white/5 border border-white/10 text-gray-200"}`}>
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          {chatHistory.length 
=== 0 && (
             <div className="text-center text-gray-500 text-sm mt-4">Start speaking to initialize conversation...</div>
          )}
        </div>
      </div>
    </div>
  ); }
