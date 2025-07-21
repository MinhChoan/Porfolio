import React from "react";
import { Button } from "@/components/retroui/Button";

interface TabBarProps {
  tabs: { key: string; label: string }[];
  activeTab: string;
  setActiveTab: (key: string) => void;
}

export default function TabBar({ tabs, activeTab, setActiveTab }: TabBarProps) {
  return (
    <nav className="flex gap-2 mb-6 justify-center flex-wrap">
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          style={activeTab === tab.key
            ? { fontSize: "0.95rem", background: "#000000ff", color: "#fff" }
            : { fontSize: "0.95rem", background: "#ffffffff", color: "#000" }
          }
          className="px-4 py-1 shadow-md text-base min-w-[90px] transition-all duration-200"
        >
          {tab.label}
        </Button>
      ))}
    </nav>
  );
}
