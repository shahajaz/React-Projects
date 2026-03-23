import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../Components/ParticlesBackground";
import FloatingIcons from "../Components/FloatingIcons";
import {FaLinkedin, FaInstagram, FaGithub, FaGlobe, FaYoutube} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import OrbitIcon from "../Components/OrbitIcon";

import {FaReact, FaNodeJs, FaJs, FaPython,} from "react-icons/fa";
import { SiMongodb, SiOpenai } from "react-icons/si";


export default function Home() {
  const roles = useMemo(() => [ 
    "MERN Developer", "Full Stack AI Developer", "Tutor", "Content Creator",
  ],[]
);

const [index, setIndex] = useState(0);
const [subIndex, setSubIndex] = useState(0);
const [deleting, setDeleting] = useState(false);

useEffect(() => {
const current = roles[index];

const timeout = setTimeout(() => {
  if (!deleting && subIndex < current.length) {
    setSubIndex((v) => v + 1);
  } else if (!deleting && subIndex === current.length) {
    setTimeout(() => setDeleting(true), 1200);
  } else if (deleting && subIndex > 0) {
    setSubIndex((v) => v - 1);
  } else if (deleting && subIndex === 0) {
    setDeleting(false);
    setIndex((p) => (p + 1) % roles.length);
  }
}, deleting ? 40 : 60);

return () => clearTimeout(timeout);

}, [subIndex, index, deleting, roles]);


return (<section id="home"
  className="w-full h-screen relative bg-black overflow-hidden">
    <ParticlesBackground />
    <FloatingIcons />


  {/* Glow Effects */}
  {/* <div className="absolute inset-0">
    <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 opacity-20 blur-[120px] animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 blur-[120px] animate-pulse delay-500"></div>
  </div> */}

  <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 flex items-center">
    <motion.div className="text-center lg:text-left max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      
      <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mt-8 mb-2 leading-tight">
        <span className="mr-2">
          Hey, It's
        </span>
        
        <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
          Ajaz
        </span>
      </h1>
      
      <motion.div className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide min-h-[1.6em]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent mr-4">I'm a</span>
        
        <span className="text-white">{roles[index].substring(0, subIndex)}</span>
        <span className="inline-block w-[2px] ml-1 bg-white animate-pulse h-8"></span>
      </motion.div>

      <motion.p className="mt-1 text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo at sapiente porro sunt illo sed ducimus est vitae fuga.
      </motion.p>

      <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
        
        <a href="#" target="_blank" rel="noopener noreferrer"
          className="p-2 border-2 border-white/20 rounded-full transition-all duration-300 hover:-translate-y-2 hover:bg-[#00a6ff] group hover:shadow-[0_0_15px_#00a6ff]">
          <FaLinkedin className="text-white text-2xl" />
        </a>
        
        <a href="#" target="_blank" rel="noopener noreferrer"
          className="p-2 border-2 border-white/20 rounded-full transition-all duration-300 hover:-translate-y-2 hover:bg-[#ff00af] group hover:shadow-[0_0_15px_#ff00af]">
          <FaInstagram className="text-white text-2xl" />
        </a>
        
        <a href="#" target="_blank" rel="noopener noreferrer"
          className="p-2 border-2 border-white/20 rounded-full transition-all duration-300 hover:-translate-y-2 hover:bg-[#1c1c1c] group hover:shadow-[0_0_15px_#1c1c1c]">
          <FaGithub className="text-white text-2xl" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer"
          className="p-2 border-2 border-white/20 rounded-full transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-[#FFA116] hover:shadow-[0_0_15px_#FFA116]">
          <SiLeetcode className="text-white text-2xl" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer"
          className="p-2 border-2 border-white/20 rounded-full transition-all duration-300 hover:-translate-y-2 hover:bg-[#00a7a7] group hover:shadow-[0_0_15px_#00a7a7]">
          <FaGlobe className="text-white text-2xl" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer"
          className="p-2 border-2 border-white/20 rounded-full transition-all duration-300 hover:-translate-y-2 hover:bg-[#FF0000] group hover:shadow-[0_0_15px_#FF0000]">
          <FaYoutube className="text-white text-2xl" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer"
          className="p-2 border-2 border-white/20 rounded-full transition-all duration-300 hover:-translate-y-2 hover:bg-[#48ff00] group hover:shadow-[0_0_15px_#48ff00]">
          <SiUpwork className="text-white text-2xl" />
        </a>
      </div>


      <motion.div className="mt-4 flex gap-4 flex-wrap justify-center lg:justify-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a href="#" className="px-6 py-2 rounded-full font-semibold text-white 
          bg-gradient-to-r from-[#ff00af] to-[#ffcc00] 
          border-2 border-yellow-400
          transition-all duration-300
          hover:shadow-[0_0_20px_rgba(255,0,175,0.6)]"
          >
            View Resume
        </a>
        
        <a href="#" className="relative px-6 py-2 rounded-full font-semibold text-white
          transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,175,0.6)]
          before:absolute before:inset-0 before:rounded-full before:p-[3px]
          before:bg-gradient-to-r before:from-[#ff00af] before:to-[#ffcc00] before:content-['']
          after:absolute after:inset-[2px] after:rounded-full
        after:bg-black after:content-['']
          hover:after:bg-gradient-to-r hover:after:from-[#ff00af] hover:after:to-[#ffcc00]"
          >
            <span className="relative z-10">Hire Me</span>
        </a>
      </motion.div>

    </motion.div>

    <div className="hidden lg:flex w-1/2 justify-center items-center">

  <div className="relative w-[320px] h-[320px]">

    {/* 🔥 CENTER CIRCLE */}
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="w-16 h-16 rounded-full 
      bg-gradient-to-r from-[#ff00af] to-[#ffcc00] 
      shadow-[0_0_30px_#ff00af] 
      flex items-center justify-center text-white text-2xl animate-spin-slow">
        🌐
      </div>
    </div>

    {/* 🟣 OUTER RING */}
    <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow">

      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <OrbitIcon><FaReact /></OrbitIcon>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <OrbitIcon><FaNodeJs /></OrbitIcon>
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <OrbitIcon><FaJs /></OrbitIcon>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <OrbitIcon><FaPython /></OrbitIcon>
      </div>

    </div>

    {/* 🔁 INNER RING */}
    <div className="absolute inset-[50px] rounded-full border border-white/10 animate-spin-reverse">

      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <OrbitIcon><SiMongodb /></OrbitIcon>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <OrbitIcon><SiOpenai /></OrbitIcon>
      </div>

    </div>

  </div>

</div>


  </div>
</section>

)
}
