import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactCard() {
  return (
    <motion.div
      className="flex flex-col items-center w-full text-center px-2 sm:px-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow mb-6"
        variants={item}
      >
        Contact
      </motion.h2>

      {/* Contact Info */}
      <div className="space-y-3 mb-6 text-lg text-gray-700">
        <motion.div variants={item}>
          📧{" "}
          <a
            href="mailto:dominhnhat.030402@gmail.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            dominhnhat.030402@gmail.com
          </a>
        </motion.div>
        <motion.div variants={item}>📞 (+84) 964 167 758</motion.div>
        <motion.div variants={item}>📍 Ho Chi Minh, Viet Nam</motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 justify-center mb-4"
        variants={item}
      >
        <a
          href="https://github.com/MinhChoan"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/nhatminhdo"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
        >
          LinkedIn
        </a>
      </motion.div>

      {/* Footer Text */}
      <motion.p
        className="text-base text-gray-600 max-w-md leading-relaxed"
        variants={item}
      >
        Feel free to reach out for collaboration, job opportunities, or just to connect!
      </motion.p>
    </motion.div>
  );
}
