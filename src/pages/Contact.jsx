import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a192f] text-white py-16 flex w-full flex-col items-center "
    >
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <div className="w-16 h-1 text-pink-500 mb-10"></div>

      <div className="dark:bg-[#030303] hover:bg-[#0a0a0a] rounded-xl p-8 shadow-lg mx-auto w-full max-w-[1350px]">
        <h3 className="text-2xl font-bold text-pink-500 mb-6">Get In Touch</h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-pink-500" />
            sarwan00maurya@gmail.com
          </li>
          <li className="flex items-center gap-3">
            <FaPhone className="text-pink-500" />
            +91 7565044815
          </li>
          <li className="flex items-center gap-3">
            <FaGithub className="text-pink-500" />
            <a
              href="https://github.com/sarwan72"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/sarwan72
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaLinkedin className="text-pink-500" />
            <a
              href="https://linkedin.com/in/sarwan-kumar-5a5658258/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/sarwan-kumar-5a5658258/
            </a>
          </li>
        </ul>

        <div className="flex gap-6 mt-6 text-2xl">
          <a href="https://github.com/sarwan72" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sarwan-kumar-5a5658258/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:sarwan00maurya@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
