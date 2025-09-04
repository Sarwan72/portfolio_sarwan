import React from "react";
import { FaCode, FaMobileAlt,FaLaptopCode, FaDatabase,FaHtml5 } from "react-icons/fa";
import GetInTouch from "../components/GetInTouch";

const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive and modern websites using the latest technologies like React.js, Next.js, and more.",
    icon: <FaCode size={30} />,
  },
  {
    title: "Responsive Design",
    description:
      "Building websites that look great on all devices, from desktops to smartphones and tablets.",
    icon: <FaMobileAlt size={30} />,
  },
  {
    title: "Frontend Development",
    description:
      "Building user-friendly interfaces with a focus on responsive design and performance.",
    icon: <FaHtml5 size={30} />,
  },
  {
    title: "Backend Development",
    description:
      "Developing robust server-side applications using Node.js, Express, MongoDB, and MySQL.",
    icon: <FaDatabase size={30} />,
  },
 {
  title: "Full Stack Development",
  description:
    "Building end-to-end web applications with modern frontend frameworks (React, Next.js) and powerful backend technologies (Node.js, Express, MongoDB, MySQL).",
  icon: <FaLaptopCode size={30} />,
},

];

function Services() {
  return (
    <>
    <div id="services" className="bg-[#0a192f] text-white px-4 sm:px-8 lg:px-20 py-14 text-center ">
      <h2 className="text-3xl font-bold mb-2">My Services</h2>
      <p className="text-gray-400 mb-10">What I offer</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-[1350px] mx-auto ">
        {services.map((service, index) => (
          <div
            key={index}
            className="dark:bg-[#030303] hover:bg-[#0a0a0a]  p-8 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            {/* Icon with gradient background */}
            <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-4 rounded-full text-white mb-4">
              {service.icon}
            </div>

            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
        <GetInTouch />
    </div>
  
    </>
  );
}

export default Services;
