

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_6ikngjk", // Your Service ID
        "template_tp6vrub", // Your Template ID
        {
          name: formData.name, // must match {{name}}
          email: formData.email, // must match {{email}}
          message: formData.message, // must match {{message}}
        },
        "BJ7YqzYLN5FHKPd6L" // Your Public Key
      );

      setIsSuccess(true);
      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSuccess(false);
      setStatus("❌ Failed to send message. Please check your EmailJS IDs.");
    }

    setIsLoading(false);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="bg-[#0a192f] text-white py-16 px-4">
      <div className="w-full max-w-[1350px] mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-2">Contact Me</h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="dark:bg-[#030303] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-pink-500 mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-pink-500" />
                <a
                  href="mailto:sarwan00maurya@gmail.com"
                  className="hover:underline"
                >
                  sarwan00maurya@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-pink-500" /> +91 7565044815
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
          </div>

          {/* Contact Form */}
          <div className="dark:bg-[#030303] p-8 rounded-2xl shadow-xl border border-white/10">
            <h3 className="text-2xl font-bold text-pink-500 mb-6 text-center">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-pink-600 hover:bg-pink-500 transition-all p-3 rounded-lg font-semibold text-white"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status && (
              <p
                className={`mt-4 text-center font-semibold ${
                  isSuccess ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
