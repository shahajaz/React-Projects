import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import image from "../assets/image.jpg";

const projects = [
  {
    title: "Personal Portfolio",
    image: image, // ✅ correct
    tools: ["HTML", "CSS", "JavaScript"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  }
];


export default function Projects(){
  return(
    <section id="projects" className="min-h-[120vh] flex flex-col items-center pt-20 md:pt-24 relative text-white bg-black px-6 overflow-hidden scroll-mt-24">

      <motion.div className="mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
              
        <h2 className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full 
          bg-black/80 backdrop-blur-md relative inline-block mx-auto">
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
              <span className="block w-full h-full rounded-full bg-black"></span>
            </span>
            <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Projects</span>
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
          </span>.
        </p>
      </motion.div>

      <div className="relative mb-6 z-10 w-full max-w-[720px] mx-auto">
  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
    
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-gray-900 rounded-xl overflow-hidden flex flex-col"
      >
        
        {/* Image */}
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-3 flex-1">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="bg-gray-700 text-sm px-2 py-1 rounded-full text-gray-200"
              >
                {tool}
              </span>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm">
            {project.desc}
          </p>
        </div>

        {/* Buttons */}
        <motion.div
          className="mt-auto p-4 flex gap-2 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          
          {/* Live Preview */}
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white 
            bg-gradient-to-r from-[#ff00af] to-[#ffcc00] border-2 border-yellow-400 transition-all duration-300
            hover:shadow-[0_0_20px_rgba(255,0,175,0.6)] hover:scale-105"
          >
            Live Preview <FiExternalLink />
          </a>
          
          {/* GitHub */}
          <a
            href="#"
            className="relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white
            transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,175,0.6)]
            before:absolute before:inset-0 before:rounded-full before:p-[2px]
            before:bg-gradient-to-r before:from-[#ff00af] before:to-[#ffcc00] before:content-['']
            after:absolute after:inset-[2px] after:rounded-full after:bg-black after:content-['']
            hover:after:bg-gradient-to-r hover:after:from-[#ff00af] hover:after:to-[#ffcc00]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaGithub /> View Code
            </span>
          </a>

        </motion.div>
      </div>
    ))}
    
  </div>
</div>

    </section>
  )
} 