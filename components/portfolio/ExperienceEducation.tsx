import React from "react";
import { motion } from "framer-motion";

export default function ExperienceEducation() {
  return (
    <motion.div
      className="flex flex-col gap-8 w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-4">EDUCATION</h2>
        <motion.div
          className="bg-white rounded-xl shadow p-4 border border-blue-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="font-semibold text-lg">Bachelor | Information Technology</div>
          <div className="text-gray-700">Saigon Technology University</div>
          <div className="text-sm text-gray-500">08/2021 – 09/2024 | Ho Chi Minh</div>
        </motion.div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-4">WORK EXPERIENCE</h2>
        <div className="flex flex-col gap-6">
          {/* MAPS Infotech */}
          <motion.div
            className="bg-white rounded-xl shadow p-4 border border-blue-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="font-semibold text-lg">Back-End Developer</div>
            <div className="text-gray-700">MAPS Infotech</div>
            <div className="text-sm text-gray-500">05/2025 – Present | Ho Chi Minh | Onsite</div>
            <div className="mt-2 text-gray-800 text-base font-medium">Professional Summary:</div>
            <div className="text-gray-700 text-sm mb-2">Backend Developer building and optimizing robust, scalable CRM systems for financial trading platforms. Specializing in Laravel (PHP), Redis, AWS S3, and API integrations, with a strong focus on performance optimization and compliance.</div>
            <div className="font-medium text-gray-800 mb-1">Key Responsibilities & Achievements:</div>
            <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
              <li>Developing and maintaining backend features for a multi-entity CRM and onboarding system in the financial trading domain.</li>
              <li>Implementing modular eKYC/AML workflows integrated with ShuftiPro, automating identity verification and compliance.</li>
              <li>Building secure and scalable AWS S3 file storage pipelines, supporting presigned URLs and multi-stage uploads.</li>
              <li>Integrating Talos Trading API to create, link, and manage trading accounts for verified users.</li>
              <li>Optimizing system performance and responsiveness with Redis caching and queue-based asynchronous processing.</li>
              <li>Developing internal admin portals for user management, onboarding flow, trading status, and audit logging.</li>
              <li>Ensuring compliance and stability of onboarding workflows across multiple trading jurisdictions.</li>
              <li>Collaborating with compliance, product, and frontend teams to deliver secure, scalable backend features.</li>
              <li>Contributing to CI/CD pipelines, Git workflows, and system monitoring for reliability and maintainability.</li>
            </ul>
            <div className="font-medium text-gray-800 mb-1">Tech Stack:</div>
            <div className="text-gray-700 text-sm mb-2">Laravel (PHP) | Redis | AWS S3 | ShuftiPro (eKYC) | Talos Trading API | MySQL | REST APIs</div>
          </motion.div>
          {/* Rebo Education */}
          <motion.div
            className="bg-white rounded-xl shadow p-4 border border-blue-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="font-semibold text-lg">Back-End Developer</div>
            <div className="text-gray-700">Rebo Education</div>
            <div className="text-sm text-gray-500">10/2024 – 04/2025 | Da Nang | Remote</div>
            <div className="mt-2 text-gray-800 text-base font-medium">Professional Summary:</div>
            <div className="text-gray-700 text-sm mb-2">Built robust and efficient backend solutions for education management systems, focusing on Laravel-based API development and system integration. Specialized in implementing scalable architectures and ensuring smooth performance across various academic workflows.</div>
            <div className="font-medium text-gray-800 mb-1">Key Responsibilities & Achievements:</div>
            <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
              <li>Developed APIs for core school management features including school administration, teacher accounts, and access control for learning materials, ensuring reliable and seamless functionality through post development testing and maintenance.</li>
              <li>Built backend APIs for content collection management, enabling teachers to efficiently organize and manage personal collections with full CRUD operations for collections and associated lessons, supported by rigorous testing and performance optimization.</li>
              <li>Integrated an LMS system with Canvas LMS using LTI standards, enhancing user experience by designing intuitive UI components and ensuring smooth operation through comprehensive testing and continuous refinement.</li>
            </ul>
            <div className="font-medium text-gray-800 mb-1">Tech Stack:</div>
            <div className="text-gray-700 text-sm mb-2">Laravel (PHP) | REST APIs | MySQL | LMS/LTI</div>
          </motion.div>
          {/* Linen Vietnam */}
          <motion.div
            className="bg-white rounded-xl shadow p-4 border border-blue-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="font-semibold text-lg">Wordpress Developer</div>
            <div className="text-gray-700">Linen Việt Nam</div>
            <div className="text-sm text-gray-500">05/2024 – 07/2024 | Ho Chi Minh | Onsite</div>
            <div className="mt-2 text-gray-800 text-base font-medium">Summary:</div>
            <div className="text-gray-700 text-sm mb-2">Developed and launched the official website for Linen Vietnam using WordPress. Ensured smooth performance, responsive design, and provided post-launch support and training for internal teams.</div>
            <div className="font-medium text-gray-800 mb-1">Key Responsibilities & Achievements:</div>
            <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
              <li>Set up hosting and domain configuration.</li>
              <li>Installed and customized WordPress theme using Elementor.</li>
              <li>Designed and customized key pages: Home, Products, About, Contact.</li>
              <li>Implemented page speed optimization and basic SEO structure.</li>
              <li>Installed and configured essential plugins (security, backup, SEO, contact forms, etc.).</li>
              <li>Provided training and documentation for content management and updates.</li>
            </ul>
            <div className="font-medium text-gray-800 mb-1">Project:</div>
            <div className="text-gray-700 text-sm mb-2">Linen Vietnam Official Website – <a href="https://linenvietnam.vn" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">linenvietnam.vn</a></div>
            <div className="font-medium text-gray-800 mb-1">Platform:</div>
            <div className="text-gray-700 text-sm mb-2">WordPress</div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
