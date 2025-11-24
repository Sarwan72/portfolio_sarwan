// export default About;
import React from "react";
import { FaDownload } from "react-icons/fa";
import Experience from "../components/Experience";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      id="about"
      className="bg-[#0a192f] text-white px-4 sm:px-8 lg:px-20 py-16"
    >
      {/* About Section */}
      <section className="w-full max-w-[1350px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">About Me</h1>
        <p className="text-center text-gray-400 mb-12">Who I Am</p>

        {/* Card */}
        <div className="transition dark:bg-[#030303] hover:bg-[#0a0a0a] duration-300 rounded-2xl shadow-lg p-8 text-gray-300 text-md md:text-xl leading-relaxed">
          <p className="mb-4">
            Hello! I'm{" "}
            <span className="text-pink-400 font-semibold">Sarwan Kumar</span>,
            currently pursuing a B.Tech in Computer Science and Engineering at
            Bundelkhand Institute of Engineering and Technology (BIET), Jhansi.
            I expect to graduate in Spring 2026.{" "}
          </p>
          <p>
            As a passionate MERN Stack Developer, I enjoy building modern,
            responsive, and scalable web applications. I focus on turning
            complex ideas into simple, functional, and user-friendly digital
            experiences.
          </p>
          <p className="mb-4">
            Over the course of my studies, I’ve worked on projects like an
            E-commerce Website, Uber Clone, and an Advertisement Page, where I
            explored technologies such as
            <span className="text-yellow-400">
              {" "}
              HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB
            </span>{" "}
            and<span className="text-yellow-400"> Tailwind CSS</span>. These
            experiences have not only sharpened my technical skills but also
            strengthened my ability to solve problems and think creatively.{" "}
          </p>
          <p>
            My aim is to craft solutions that are efficient, engaging, and
            impactful — bridging the gap between functionality and great user
            experience.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <div className="mt-0">
        <Experience />
      </div>

      {/* Resume Section */}
      <section className="w-full p-10 rounded-2xl  dark:bg-[#030303] hover:bg-[#0a0a0a] max-w-[1350px] mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">Resume</h2>
        <p className="text-gray-400 mb-6">
          Download my resume to learn more about my professional journey and
          accomplishments.
        </p>
        <a
          href="/sarwan_resume_2411.pdf"
          download="Sarwan-Resume.pdf"
          className="inline-flex items-center gap-2 bg-pink-500 text-black font-bold py-2 px-6 rounded-md hover:bg-pink-400 transition duration-300"
        >
          <FaDownload />
          Download
        </a>
      </section>
    </div>
  );
}

export default About;
