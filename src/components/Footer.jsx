import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../images/sarwan_profile.jpg";
function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-300 mt-1">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and About */}
          <div>
            <img
              src={profileImage}
              alt="Sarwan Kumar"
              className="w-12 h-12 rounded-full mx-auto md:mx-0 mb-3"
            />
            <p className="text-sm leading-relaxed">
              Thank you for visiting my portfolio. Connect with me on social
              media and feel free to reach out for collaborations or inquiries.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[#f0a500] font-semibold mb-4">Contact Me</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2" />
                sarwan00maurya@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-2" />
                +91 7565044815
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2" />
                gonda, Uttar Pradesh, India
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-[#f0a500] font-semibold mb-4">Follow Me</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/sarwan-kumar-5a5658258/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#f0a500] transform hover:scale-125 transition duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/_sarwan_6364/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#f0a500] transform hover:scale-125 transition duration-300"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://github.com/Sarwan72"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#f0a500] transform hover:scale-125 transition duration-300"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-xs">&copy; 2025 Sarwan Kumar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
