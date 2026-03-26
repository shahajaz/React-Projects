import { motion } from "framer-motion";
import { useState } from "react";
import { FaReact, FaHtml5, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const [active, setActive] = useState("All");
  const buttons = ["All", "Frontend", "Backend", "Tools/Others"];


  

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="skills"
      className="min-h-[120vh] flex flex-col items-center pt-20 md:pt-24 relative bg-transparent text-white overflow-hidden px-6 scroll-mt-24"
    >
      {/* Glow */}
      {glows.map((c, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-to-r from-[#00bbbb] to-[#0000ff] ${c} -z-10`}
        />
      ))}

      {/* Heading */}
      <motion.div
        className="relative z-10 mb-6 text-center w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full 
          bg-black/80 backdrop-blur-md relative inline-block mx-auto"
        >
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
            <span className="block w-full h-full rounded-full bg-black"></span>
          </span>

          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
          A comprehensive overview of my{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            technical expertise
          </span>{" "}
          across diverse domains, showcasing my ability to{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            design, develop
          </span>{" "}
          and deliver{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            scalable solutions
          </span>.
        </p>
      </motion.div>


      {/* Buttons */}
      <motion.div className="flex flex-wrap justify-center gap-4 mt-2 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
          
          {buttons.map((btn) => (<motion.button
          key={btn} onClick={() => setActive(btn)} whileTap={{ scale: 0.96 }}
          whileHover={{ y: -3 }} 
          transition={{ type: "spring", stiffness: 300, damping: 20 }} // 👈 smooth motion
          className={`px-5 py-2 rounded-full transition-colors duration-300 border-2
          ${active === btn
          ? "bg-gradient-to-r from-[#ff00af] to-[#ffcc00] text-black font-semibold border-transparent"
          : "border-white/20 text-white bg-transparent"}`}>
            {btn}
        </motion.button>
      ))}
      </motion.div>


      


    </section>
  );
}