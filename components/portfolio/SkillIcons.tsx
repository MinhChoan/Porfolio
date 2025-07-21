import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Laravel", icon: "/window.svg" },
      { name: "NextJS", icon: "/next.svg" },
      { name: "Bootstrap", icon: "/window.svg" },
    ],
  },
  {
    title: "API & Integration",
    skills: [
      { name: "REST APIs", icon: "/globe.svg" },
      { name: "Talos Trading API", icon: "/globe.svg" },
      { name: "LTI/LMS", icon: "/globe.svg" },
    ],
  },
  {
    title: "KYC & Compliance",
    skills: [{ name: "ShuftiPro", icon: "/globe.svg" }],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MySQL", icon: "/file.svg" },
      { name: "Redis", icon: "/vercel.svg" },
      { name: "AWS S3", icon: "/next.svg" },
      { name: "Queue Workers", icon: "/file.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "CI/CD", icon: "/vercel.svg" },
      { name: "Git", icon: "/window.svg" },
      { name: "CRM Platform", icon: "/file.svg" },
    ],
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Docker", icon: "/file.svg" },
      { name: "Postman", icon: "/file.svg" },
      { name: "Insomnia", icon: "/file.svg" },
      { name: "DBeaver", icon: "/file.svg" },
      { name: "Redis Insight", icon: "/file.svg" },
      { name: "n8n", icon: "/file.svg" },
    ],
  },
];

export default function SkillIcons() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {skillGroups.map((group, groupIdx) => (
        <div key={group.title} className="w-full">
          <h3 className="text-lg font-bold text-blue-700 mb-4 text-left pl-2">
            {group.title}
          </h3>
          <div
            className="
              grid 
              w-full 
              grid-cols-[repeat(auto-fit,minmax(90px,1fr))] 
              gap-3 sm:gap-4 md:gap-5
            "
          >
            {group.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="
                  flex flex-col items-center justify-center 
                  bg-white rounded-xl shadow-md 
                  p-2 sm:p-3 
                  hover:scale-105 transition-transform 
                  border border-blue-100
                "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + groupIdx * 0.2 + idx * 0.07,
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 sm:w-9 sm:h-9 mb-1"
                />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center whitespace-nowrap">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
