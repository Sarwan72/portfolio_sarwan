import React from "react";

const skills = [
  "Generative AI",
  "Git",
  "GitHub",
  "Postman",

  "RESTful APIs",
  "Responsive Design",
  "UI/UX Design",
  "Problem Solving",
  "Team Collaboration",
  "Communication",
];

export default function OtherSkills() {
  return (
    <div className="dark:bg-[#030303] hover:bg-[#0a0a0a] max-w-[1350px] mx-auto mt-7 rounded-xl p-6">
      {/* Heading */}
      <h2 className="text-white text-2xl font-semibold">
        Other Skills
      </h2>
      {/* Pink underline */}
      <div className="w-10 h-1 bg-pink-500 mt-1 mb-4 rounded-full"></div>

      {/* Skills list */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[#151515] text-pink-500 px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
