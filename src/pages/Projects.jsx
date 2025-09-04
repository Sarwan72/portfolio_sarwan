import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import portfolioImg from "../assets/images/ticTacToeImg.jpg";
// import weatherImg from "../assets/images/todoImg.jpg";
import InterestedInWork from "../components/InterestedInWork";
import uber from "../assets/images/uber.png";
import Ecommerce from "../assets/images/Ecommerce.png";
import portfolio from "../assets/images/portfolio.png";

const projects = [
  {
    title: "Personal Portfolio App",
    description:
      "A responsive and modern portfolio app showcasing my skills, projects, resume, and personal details.",
    image: portfolio,
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML"],
    liveLink: "https://your-portfolio-link.com",
    githubLink: "https://github.com/your-repo",
  },
  {
    title: "Uber Clone",
    description:
      "A ride-sharing application that connects drivers and passengers in real-time in mobile view.",
    image: uber,
    tech: ["JavaScript","HTML", "React", "API Integration", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"],
    liveLink: "https://uberclone-u9si-pu1dobtak-sarwan-kumars-projects-17476828.vercel.app/",
    githubLink: "https://github.com/Sarwan72/Uberclone",
  },
  {
    title: "Frontend E-commerce Project",
    description:
      "A frontend e-commerce application with a focus on user experience and performance.",
    image: Ecommerce,
    tech: ["React", "HTML", "JavaScript", "Tailwind CSS"],
    liveLink: "https://frontend-e-commerce-project-s89d-24hm3ryfc.vercel.app/",
    githubLink: "https://github.com/Sarwan72/frontend_eCommerce_project",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="bg-[#0a192f] text-white px-4 sm:px-8 lg:px-20 py-10"
    >
      <h2 className="text-3xl font-bold text-center text-[#e19f0f] mb-10">
        Projects
      </h2>

      {/* Grid layout - 3 cols */}
      <div className="grid md:grid-cols-3 gap-6 max-w-[1350px] mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative dark:bg-[#030303] hover:bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-lg group min-h-[450px] flex flex-col"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 border rounded-tl-2xl rounded-tr-2xl border-black object-cover"
            />

            {/* Hover buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-3 rounded-full text-white hover:bg-pink-600 transition"
              >
                <FaExternalLinkAlt size={20} />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-3 rounded-full text-white hover:bg-pink-600 transition"
              >
                <FaGithub size={20} />
              </a>
            </div>

            {/* Text */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm border border-pink-500 rounded-full text-pink-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/Sarwan72"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r  bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition"
        >
          View All Projects →
        </a>
      </div>

      <InterestedInWork />
    </div>
  );
}

export default Projects;
