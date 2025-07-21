import React from "react";

export default function ProjectsCard() {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="list-disc ml-5 text-lg text-left w-full max-w-xl">
        <li>
          <span className="font-semibold">Personal Portfolio</span> – Modern, responsive portfolio built with Next.js and Tailwind CSS.
        </li>
        <li>
          <span className="font-semibold">E-commerce Website</span> – Full-featured online store with product management, cart, and checkout.
        </li>
        <li>
          <span className="font-semibold">Task Management App</span> – Productivity tool for managing tasks, deadlines, and team collaboration.
        </li>
      </ul>
    </div>
  );
}
