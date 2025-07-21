import React from "react";

export default function ContactCTA() {
  return (
    <div className="mt-8 w-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Let’s Build Together!</h2>
      <p className="text-lg mb-4 text-center">Interested in working together? Send me an email with your collaboration idea!</p>
      <a
        href="mailto:dominhnhat.030402@gmail.com?subject=Collaboration%20Request"
        className="font-semibold py-2 px-6 shadow-lg transition-all duration-200 w-full max-w-xs text-center border"
        style={{ fontFamily: 'monospace', letterSpacing: '0.03em' }}
      >
        Contact Me
      </a>
    </div>
  );
}
