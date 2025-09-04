import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { BsSun, BsMoon } from "react-icons/bs";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(
  //   localStorage.getItem("theme") === "dark"
  // );

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Services", path: "services" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/sarwan72" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sarwan-kumar-5a5658258/" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/_sarwan_6364/" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white fixed w-full z-50 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <span
          onClick={() => handleScroll("home")}
          className="cursor-pointer text-2xl font-bold"
        >
          Sarwan Kumar<span className="text-pink-500">.</span>
        </span>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => handleScroll(item.path)}
                className="text-lg hover:text-pink-500 transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side: Social Icons + Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-4">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-500 hover:border-pink-500 hover:text-pink-500 transition-colors"
            >
              {link.icon}
            </a>
          ))}

          {/* Theme Toggle Button */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-500 hover:border-pink-500 transition-colors"
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0a0a0a] px-6 pb-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => handleScroll(item.path)}
                  className="block w-full text-left text-lg hover:text-pink-500 transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-500 hover:border-pink-500 hover:text-pink-500 transition-colors"
              >
                {link.icon}
              </a>
            ))}
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-gray-500 hover:border-pink-500 transition-colors"
            >
              {darkMode ? <BsSun /> : <BsMoon />}
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
