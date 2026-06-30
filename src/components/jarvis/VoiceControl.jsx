import React, { useState, useEffect, useCallback } from "react";
import { Mic, MicOff, AlertCircle } from "lucide-react";

export default function VoiceControl({ onTranscript, isSpeaking }) {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      
      rec.onresult = (vent) => {
        let finalTranscript = "";
        let interimTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          onTranscript(finalTranscript, true);
        } else if (interimTranscript) {
          onTranscript(interimTranscript, false);
        }
      };

      rec.onerror = (event) => {
        setError(event.error);
        setIsListening(false);
      };

      rec.onend = () => {
        if (isListening && !isSpeaking) {
           try { rec.start(); } catch(e) {}
        } else {
           setIsListening(false);
        }
      };

      setRecognition(rec);
    } else {
      setError("Speech Recognition API not supported in this browser.");
    }
  }, [onTranscript, isListening, isSpeaking]);

  useEffect(() => {
    if (isSpeaking && isListening && recognition) {
      recognition.stop();
      setIsListening(false);
    }
  }, [isSpeaking, isListening, recognition]);

  const toggleListening = useCallback(() => {
    if (isListening) {
      recognition?.stop();
      setIsListening(false);
    } else {
      setError(null);
      try {
        recognition?.start();
        setIsListening(true);
      } catch (err) {
        console.error(err);
      }
    }
  }, [isListening, recognition]);

  return (
    <div className="flex flex-col items-center space-y-4 z-10">
      <button
        onClick={toggleListening}
        disabled={isSpeaking}
        className={`relative group px-8 py-4 rounded-full flex items-center space-x-3 transition-all duration-300 ${isSpeaking ? "opacity-50 cursor-not-allowed bg-gray-800" : isListening ? "bg-red-500/20 border-red-500 text-red-400" : "bg-[#00f0ff]/10 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/20"} border neon-border`}
      >
        {isListening ? <MicOff size={24} className="animate-pulse" /> : <Mic size={24} />}
        <span className="font-display font-semibold tracking-wide uppercase">
          {isSpeaking ? "AI Speaking" : isListening ? "Deactivate Voice" : "Activate Voice"}
        </span>
      </button>
      {error && (
        <div className="flex items-center space-x-2 text-red-400 text-sm">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
