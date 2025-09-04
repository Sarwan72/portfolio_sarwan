import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OtherSkills from "../components/OtherSkills";

const skillsData = {
  frontend: [
    { id: 1, name: "HTML", level: 90 },
    { id: 2, name: "CSS", level: 85 },
    { id: 3, name: "JavaScript", level: 80 },
    { id: 4, name: "TypeScript", level: 60 },
    { id: 5, name: "React", level: 75 },
    { id: 6, name: "Responsive Design", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "RESTful APIs", level: 75 },
    { name: "SQL", level: 70 },
    { name: "NoSQL", level: 65 },
    { name: "MongoDB", level: 75 },
  ],
};

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.querySelector("#skills");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#0a192f] text-white px-6 py-16"
    >
      <div className="max-w-[1350px] mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-2">My Skills</h2>
        <p className="text-center text-gray-400 mb-12">What I can do</p>

        <div className="grid md:grid-cols-2 gap-10  ">
          {/* Frontend */}
          <div className="dark:bg-[#030303] hover:bg-[#0a0a0a] p-6 rounded-2xl shadow-lg ">
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-pink-500 inline-block">
              Frontend Development
            </h3>
            {skillsData.frontend.map((skill, i) => (
              <motion.div
                key={skill.id}
                className="mb-6"
                variants={skillVariant}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                custom={i}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-pink-500 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Backend */}
          <div className="dark:bg-[#030303] hover:bg-[#0a0a0a]  p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-pink-500 inline-block">
              Backend Development
            </h3>
            {skillsData.backend.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="mb-6"
                variants={skillVariant}
                initial="hidden"
                animate={visible ? "visible" : "hidden"}
                custom={i}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-pink-500 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <OtherSkills />
    </section>
  );
}
