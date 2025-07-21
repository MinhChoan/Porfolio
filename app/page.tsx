'use client';
import { useState } from "react";
import AvatarCard from "@/components/portfolio/AvatarCard";
import TabBar from "@/components/portfolio/TabBar";
import MainCard from "@/components/portfolio/MainCard";
import SkillIcons from "@/components/portfolio/SkillIcons";

import ExperienceEducation from "@/components/portfolio/ExperienceEducation";

const tabs = [
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience & Education" },
  // { key: "contact", label: "Contact" },
];
import AboutCard from "@/components/portfolio/AboutCard";
import ProjectsCard from "@/components/portfolio/ProjectsCard";
import ContactCard from "@/components/portfolio/ContactCard";

const tabContents: Record<string, React.ReactNode> = {
  about: <AboutCard />, 
  projects: <ProjectsCard />, 
  skills: (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="w-full flex justify-center">
        <SkillIcons />
      </div>
    </div>
  ),
  experience: <ExperienceEducation />,
  // contact: <ContactCard />,
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>("about");
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="grid grid-cols-12 gap-8 w-full max-w-[1600px] h-[90vh] px-8 py-12 shadow-xl bg-white border-4">
        {/* Left: Avatar & Info */}
        <div className="col-span-3 flex items-center justify-center">
          <AvatarCard />
        </div>
        {/* Right: Tabs & Main Content */}
        <div className="col-span-9 flex flex-col items-center justify-start">
          <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <MainCard>
            {tabContents[activeTab]}
          </MainCard>
        </div>
      </div>
    </main>
  );
}