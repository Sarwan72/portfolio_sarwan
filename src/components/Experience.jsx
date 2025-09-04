import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="w-full ]bg-[#0a192f text-white py-16  max-w-[1350px] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">Experience</h2>
      <p className="text-center text-gray-400 mb-12">My Work Journey</p>

      <div className="space-y-8">
        {/* Experience Item */}
        <div className="w-full dark:bg-[#030303] hover:bg-[#0a0a0a]  transition 
                        duration-300 rounded-2xl border-l-4 border-pink-500 px-6 py-6 
                        flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-pink-400">IT Intern</h3>
            <a
              href="#"
              className="text-blue-400 hover:underline text-sm"
            >
              Honda Cars Ltd. India
            </a>
            <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1 text-md md:text-xl">
              <li>
                Gained fundamental industry knowledge while working on real-world IT projects
              </li>
              <li>
                Modified and debugged web pages to improve functionality and user experience
              </li>
              <li>
                Developed and enhanced a customer review analysis system using AI tools
              </li>
              <li>
                Collaborated with cross-functional teams for technical solutions
              </li>
            </ul>
          </div>

          <span className="bg-pink-900 text-pink-300  font-medium px-3 py-1 
                           rounded-full mt-4 md:mt-0 text-sm md:text-xl">
            June 2025 – Present
          </span>
        </div>
      </div>
    </section>
  );
}
