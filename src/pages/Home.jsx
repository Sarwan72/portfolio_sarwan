import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Services from "./Services";
import profileImage from "../images/sarwan_profile.jpg";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
];

function Home() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const cursor = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(cursor);
  }, []);

  useEffect(() => {
    let timeout;

    if (
      index === roles.length - 1 &&
      subIndex === roles[index].length &&
      !deleting
    ) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 120000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === roles[index].length && !deleting) {
      timeout = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length); // cycle through roles
      return;
    }

    timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 60 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="w-full min-h-screen flex items-center bg-[#0a192f] text-white px-6 md:px-16 pt-20"
      >
        <div className="max-w-[1350px] mx-auto  grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 block !visible !opacity-100">
              Hi, I'm <span className="text-[#e19f0f]">Sarwan Kumar</span>
            </h1>
            <h2 className="text-2xl font-bold   text-gray-300 mb-6">
              {" "}
              {roles[index].substring(0, subIndex)}
              <span className="inline-block w-1">{blink ? "|" : " "}</span>
            </h2>
           
            <p className="text-gray-400 mb-8 leading-relaxed text-md md:text-xl">
              I’m a passionate Full-Stack Developer dedicated to building
              dynamic and responsive web applications. I love blending creative
              design with technical expertise to deliver innovative,
              user-focused solutions. With strong skills in the MERN stack and
              modern web technologies, I focus on creating products that are
              functional, scalable, and visually engaging—turning ideas into
              impactful digital experiences.
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#e19f0f] text-white px-6 py-3 rounded-lg hover:bg-[#c89a07] transition"
              >
                Hire Me
              </a>
              <a
                href="#contact"
                className="border border-[#e19f0f] text-[#e19f0f] px-6 py-3 rounded-lg hover:bg-[#e19f0f] hover:text-white transition"
              >
                Let's Talk
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 text-2xl">
              <a
                href="https://www.linkedin.com/in/sarwan-kumar-5a5658258/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e19f0f] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/_sarwan_6364/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e19f0f] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Sarwan72"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e19f0f] transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={profileImage}
              alt="Sarwan"
              className="w-80 h-80 object-cover rounded-full border-4 border-[#e19f0f] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
