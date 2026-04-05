import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../Components/ParticlesBackground";
import FloatingIcons from "../Components/FloatingIcons";
import {FaLinkedin, FaInstagram, FaGithub, FaGlobe, FaYoutube} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import OrbitIcon from "../Components/OrbitIcon";
import { FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";
import { HiCode } from "react-icons/hi";


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


return (<section id="home" className="w-full h-screen relative bg-black overflow-hidden">
    <ParticlesBackground />
    <FloatingIcons />


  {/* Glow Effects */}
  {/* <div className="absolute inset-0">
    <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 opacity-20 blur-[120px] animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 blur-[120px] animate-pulse delay-500"></div>
  </div> */}

  <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-2 flex items-center">
    <motion.div className="text-center lg:text-left max-w-2xl mt-20 sm:mt-24 lg:mt-0 lg:ml-10 xl:ml-16"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
          font-bold text-white t-12 sm:mt-8 lg:mt-8 mb-2 leading-tight break-words">
          <span className="mr-2">
            Hey, It's
          </span>
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Ajaz</span>
      </h1>
      
      <motion.div className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide min-h-[1.6em]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent mr-4">I'm a</span>
        
        <span className="text-white">{roles[index].substring(0, subIndex)}</span>
        <span className="inline-block w-[2px] ml-1 bg-white animate-pulse h-8"></span>
      </motion.div>

      <motion.p className="mt-1 text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
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
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>

        <a href="#" className="px-6 py-2 rounded-full font-semibold text-white 
          bg-gradient-to-r from-[#ff00af] to-[#ffcc00] 
          border-2 border-yellow-400 transition-all duration-300
          hover:shadow-[0_0_20px_rgba(255,0,175,0.6)] hover:scale-105"
          >View Resume</a>
        
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


    {/* Home Right Content */}
    <motion.div className="hidden lg:flex w-1/2 justify-center items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="relative w-[360px] h-[360px]">
        
        {/* 🔥 CENTER */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#ff00af] to-[#ffcc00] 
            shadow-[0_0_40px_#ff00af] flex items-center justify-center animate-spin-slow">
            <HiCode className="text-white text-6xl"/>
          </div>
        </div>
        
        {/* 🟣 OUTER RING */}
        <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] animate-spin-slow">
          <div className="w-full h-full rounded-full bg-black relative">
            
            {/* TOP */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <OrbitIcon><FaReact /></OrbitIcon>
            </div>
            
            {/* BOTTOM */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <OrbitIcon><FaNodeJs /></OrbitIcon>
            </div>

            {/* LEFT */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <OrbitIcon><FaJava /></OrbitIcon>
            </div>

            {/* RIGHT */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
              <OrbitIcon><FaPython /></OrbitIcon>
            </div>

            {/* TOP RIGHT */}
            <div className="absolute top-[15%] right-[15%]">
              <OrbitIcon><SiTypescript /></OrbitIcon>
            </div>

            {/* TOP LEFT */}
            <div className="absolute top-[15%] left-[15%]">
              <OrbitIcon><SiNextdotjs className="text-white" /></OrbitIcon>
            </div>

            {/* BOTTOM RIGHT */}
            <div className="absolute bottom-[15%] right-[15%]">
              <OrbitIcon><FaNodeJs /></OrbitIcon>
            </div>

            {/* BOTTOM LEFT */}
            <div className="absolute bottom-[15%] left-[15%]">
              <OrbitIcon><SiMongodb /></OrbitIcon>
            </div>
          </div>
        </div>
        
        
        {/* 🔁 INNER RING */}
        <div className="absolute inset-[60px] rounded-full p-[3px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] animate-spin-reverse">
          <div className="w-full h-full rounded-full bg-black relative">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <OrbitIcon><SiMongodb /></OrbitIcon>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <OrbitIcon><SiTypescript /></OrbitIcon>
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <OrbitIcon><SiNextdotjs className="text-white" /></OrbitIcon>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
              <OrbitIcon><FaReact /></OrbitIcon>
            </div>
          
          </div>
        </div>
      </div>
    </motion.div>
    
  </div>
</section>

)
}
