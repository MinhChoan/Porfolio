import React from "react";

interface MainCardProps {
  children: React.ReactNode;
}

export default function MainCard({ children }: MainCardProps) {
  return (
    <div
      className="p-10 bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-2xl text-gray-800 text-xl w-full max-w-5xl min-h-[350px] max-h-[70vh] flex flex-col items-center justify-start overflow-auto border border-blue-100"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#6366f1 #e0e7ff",
      }}
    >
      <style>{`
        .retro-scrollbar::-webkit-scrollbar {
          width: 10px;
          border-radius: 8px;
          background: #e0e7ff;
        }
        .retro-scrollbar::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 8px;
        }
      `}</style>
      <div className="w-full retro-scrollbar h-full">
        {children}
      </div>
    </div>
  );
}
