import React, { useState } from "react";
import EditorView from "./components/jarvis/EditorView";
import ManagerDashboard from "./components/jarvis/ManagerDashboard";
import TerminalPanel from "./components/jarvis/TerminalPanel";

function App() {
  const [logs, setLogs] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const addLog = (message, type = "system") => {
    setLogs((prev) => [
      ...prev,
      { time: new Date().toLocaleTimeString(), message, type }
    ]);
  };

  const handleTranscript = (text, isFinal) => {
    if (isFinal) {
      addLog(`User: ${text}`, "user");
      setChatHistory((prev) => [...prev, { role: "user", content: text }]);
      
      // Simulate processing and AI response for MVP
      setIsProcessing(true);
      addLog("Transmitting to reasoning engine...", "system");
      
      setTimeout(() => {
        setIsProcessing(false);
        const responseText = "Acknowledged. I am processing your request. All systems nominal.";
        addLog(`JARVIS: ${responseText}`, "ai");
        setChatHistory((prev) => [...prev, { role: "ai", content: responseText }]);
        
        // Simulate speaking state
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 3000); // Mock 3-second speech
      }, 1500);
    }
  };

  // Initialize checks
  React.useEffect(() => {
    addLog("System booting sequence initiated...", "system");
    setTimeout(() => {
      const missingKeys = [];
      if (!import.meta.env.VITE_OPENAI_API_KEY) missingKeys.push("OPENAI_API_KEY");
      if (!import.meta.env.VITE_ELEVENLABS_API_KEY) missingKeys.push("ELEVENLABS_API_KEY");
      if (!import.meta.env.VITE_SERPAPI_API_KEY) missingKeys.push("SERPAPI_API_KEY");
      
      if (missingKeys.length > 0) {
        addLog(`CRITICAL: Missing Environment Variables: ${missingKeys.join(", ")}. Please configure .env.local`, "error");
      } else {
        addLog("All API keys successfully loaded. Connection established.", "system");
      }
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-white p-4 font-sans flex flex-col md:flex-row gap-4 h-screen overflow-hidden">
      {/* Left side: Editor/Chat View */}
      <div className="flex-1 min-w-[50%] h-full flex flex-col gap-4">
        <div className="flex-1">
          <EditorView 
            chatHistory={chatHistory}
            isListening={!isSpeaking && !isProcessing} // Basic heuristic for MVP visual
            isProcessing={isProcessing}
            onTranscript={handleTranscript}
            isSpeaking={isSpeaking}
          />
        </div>
      </div>

      {/* Right side: Manager View & Terminal */}
      <div className="w-full md:w-[400px] lg:w-[500px] h-full flex flex-col gap-4">
        <div className="flex-[3]">
          <ManagerDashboard isProcessing={isProcessing} />
        </div>
        <div className="flex-[2]">
          <TerminalPanel logs={logs} />
        </div>
      </div>
    </div>
  ); }

export default App;