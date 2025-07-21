import React from "react";
import { motion } from "framer-motion";
import ContactCTA from "@/components/portfolio/ContactCTA";

export default function AvatarCard() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-50 to-white shadow-2xl border-2 w-full h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.img
        src="/me.png"
        alt="Avatar"
        className="w-32 h-32 rounded-full shadow mb-6 border-2 object-cover bg-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
      />
      <motion.h1
        className="text-3xl font-extrabold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Nhat (Nathan) Do
      </motion.h1>
      <motion.div
        className="text-lg font-semibold mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        Back-end Developer
      </motion.div>
      <ContactCTA />
    </motion.section>
  );
}
