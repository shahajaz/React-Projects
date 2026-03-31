import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import image from "../assets/image.jpg";
import image3 from "../assets/img3.jpg";

const projects = [
  {
    title: "Personal Portfolio (v1)",
    image: image,
    tools: ["HTML5", "CSS3", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Vehicle Rental System",
    image: image3,
    tools: ["HTML5", "CSS3", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "E-Commerce Application",
    image: image3,
    tools: ["React.js", "TailwindCSS", "Context API", "Redux Toolkit", "Firebase"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "E-Commerce Application",
    image: image3,
    tools: ["React.js", "TailwindCSS", "Context API", "Redux Toolkit", "Firebase"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "E-Commerce Application",
    image: image3,
    tools: ["React.js", "TailwindCSS", "Context API", "Redux Toolkit", "Firebase"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "E-Commerce Application",
    image: image3,
    tools: ["React.js", "TailwindCSS", "Context API", "Redux Toolkit", "Firebase"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "E-Commerce Application",
    image: image3,
    tools: ["React.js", "TailwindCSS", "Context API", "Redux Toolkit", "Firebase"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "E-Commerce Application",
    image: image3,
    tools: ["React.js", "TailwindCSS", "Context API", "Redux Toolkit", "Firebase"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "E-Commerce Application",
    image: image3,
    tools: ["React.js", "TailwindCSS", "Context API", "Redux Toolkit", "Firebase"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "E-Commerce Application",
    image: image3,
    tools: ["React.js", "TailwindCSS", "Context API", "Redux Toolkit", "Firebase"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "E-Commerce Website",
    image: image,
    tools: ["React", "Node", "MongoDB"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-[120vh] flex flex-col items-center pt-20 md:pt-24 pb-20 md:pb-24 relative text-white bg-black px-6 overflow-hidden scroll-mt-24">
      {/* Heading */}
      <motion.div
        className="mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        
        <h2 className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full bg-black/80 backdrop-blur-md relative inline-block mx-auto">
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
            <span className="block w-full h-full rounded-full bg-black"></span>
          </span>
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
          A showcase of my{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            recent projects
          </span>
          , demonstrating my{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            skills and expertise
          </span>{" "}
          across diverse technologies and domains, with a focus on building{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            scalable and impactful solutions
          </span>
          .
        </p>
      </motion.div>

      {/* ProjectsCard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-8 items-stretch">
        {projects.map((project, index) => (
          <div key={index}
            className="group relative max-w-sm mx-auto rounded-xl p-[1px] 
            bg-gradient-to-r from-[#ff00af] to-[#ffcc00] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,0,175,0.4)]">
            
            <div className="bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col h-full">


              {/* Image */}
              <div className="h-56 md:h-64 lg:h-72 overflow-hidden relative group/image">
              <img src={project.image} alt={project.title}
              className="w-full h-full object-cover transition duration-500 group-hover/image:scale-110"/>
              <div className="absolute inset-0 bg-black/30 group-hover/image:bg-black/10 transition duration-500"></div>
              
              {/* Gradient Bottom Border */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00]
                opacity-70 group-hover/image:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white tracking-wide">
                  {project.title}
                </h3>

                <div className="grid grid-cols-4 gap-2 w-full">
                  {project.tools.map((tech, i) => (
                    <span key={i} className="flex items-center justify-center px-2 py-1 text-[11px] 
                      rounded-full bg-white/5 border border-white/10 text-gray-200 
                      backdrop-blur-md hover:border-pink-500 transition 
                      text-center whitespace-nowrap overflow-hidden text-ellipsis">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-2 justify-center mt-auto">
                  {/* Live Preview */}
                  <a
                    href="#"
                    className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white 
                    bg-gradient-to-r from-[#ff00af] to-[#ffcc00]
                    transition duration-300
                    hover:scale-105 
                    hover:shadow-[0_0_20px_rgba(255,0,175,0.6),0_0_30px_rgba(255,204,0,0.5)]">
                    Live Preview <FiExternalLink />
                  </a>

                  {/* GitHub */}
                  <a
                    href="#"
                    className="relative inline-flex rounded-full p-[2px] 
                    bg-gradient-to-r from-[#ff00af] to-[#ffcc00]
                    hover:scale-105 transition duration-300
                    hover:shadow-[0_0_20px_rgba(255,0,175,0.6),0_0_30px_rgba(255,204,0,0.5)]">
                    <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white text-sm font-semibold">
                      <FaGithub /> View Code
                    </span>
                  </a>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}