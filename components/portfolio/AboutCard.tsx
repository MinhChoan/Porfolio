import React from "react";
import { motion } from "framer-motion";

export default function AboutContactCard() {
  return (
    <motion.div
      className="flex flex-col items-center w-full text-center px-2 sm:px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* About Section */}
      <motion.h2
        className="text-4xl font-extrabold mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="text-3xl font-bold text-black-700 mb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Nhat (Nathan) Do
      </motion.div>
      <motion.div
        className="text-xl font-semibold text-black-600 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        Back-end Developer
      </motion.div>
      <motion.p
        className="text-lg text-gray-700 max-w-2xl leading-relaxed mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        Passionate backend developer with strong experience in
        <span className="font-semibold text-blue-700"> Laravel</span> and
        <span className="font-semibold text-purple-700"> MySQL</span>.  <br />
        Skilled in API design, performance optimization, and building scalable systems.<br />
        Focused on clean code, security, and delivering reliable solutions.
      </motion.p>

      {/* Divider */}
      <div className="w-full border-t border-gray-300 my-6"></div>

      {/* Contact Section */}
      <motion.h2
        className="text-4xl font-extrabold mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Contact
      </motion.h2>
      <div className="space-y-3 mb-6 text-lg text-gray-700">
        <div>
          📧 <a href="mailto:dominhnhat.030402@gmail.com" className="font-semibold hover:underline">dominhnhat.030402@gmail.com</a>
        </div>
        <div>📞 (+84) 964 167 758</div>
        <div>📍 Ho Chi Minh, Viet Nam</div>
      </div>
      <div className="flex gap-6 justify-center mb-4">
        <a href="https://github.com/MinhChoan" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black shadow-lg hover:bg-gray-400 transition">
          GitHub
        </a>
        <a href="https://linkedin.com/in/nhatminhdo" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black shadow-lg hover:bg-gray-400 transition">
          LinkedIn
        </a>
      </div>
      <p className="text-base text-gray-600 max-w-xl leading-relaxed">
        Feel free to reach out for collaboration, job opportunities, or just to connect!
      </p>
    </motion.div>
  );
}
