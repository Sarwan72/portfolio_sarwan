import React from "react";
import { FaPaperPlane } from "react-icons/fa";

function InterestedInWork() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-[#030303] hover:bg-[#0a0a0a] text-center py-10 px-6 rounded-2xl shadow-lg mt-10 max-w-[1350px] mx-auto">
      <h2 className="text-2xl font-semibold mb-2">
        Looking for a custom service?
      </h2>
      <p className="text-gray-400 mb-6">
        I'm open to discussing your project requirements and finding the best
        solution for your needs.
      </p>
      <button
        onClick={scrollToContact}
        className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        <FaPaperPlane />
        Get In Touch
      </button>
    </div>
  );
}

export default InterestedInWork;
