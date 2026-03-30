import AboutImg from "../assets/about.png";
import { motion } from "framer-motion";

export default function About() {

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section id="about" className="min-h-[120vh] flex flex-col items-start pt-20 md:pt-24 relative bg-black/70 text-white overflow-hidden px-6 scroll-mt-24">

      {/* Glow */}
      {glows.map((c, i) => (
        <div key={i}
          className={`absolute rounded-full bg-gradient-to-r from-[#00bbbb] to-[#0000ff] ${c}`}
        />
      ))}
      
      {/* Heading */}
      <motion.div className="relative z-10 mb-8 text-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full 
          bg-black/80 backdrop-blur-md relative inline-block mx-auto">
            
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
              <span className="block w-full h-full rounded-full bg-black"></span>
            </span>
            
            <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">About Me</span>
          </h2>
          
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
            Creating <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">digital experiences</span> that inspire, 
            building <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">scalable solutions</span>, 
            and turning ideas into <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">impactful products</span>.
          </p>
      </motion.div>
      
      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-[320px,1fr] gap-4 items-center">
        
        <motion.div className="flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}>
            
            <div className="relative w-[300px] h-[300px] group">
              <div className="absolute inset-0 rounded-xl z-30 pointer-events-none
                transition-all duration-300 group-hover:shadow-[0_0_60px_rgba(255,0,175,0.5)]" />
                
                {/* Border */}
                <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
                  <div className="absolute -inset-[30%] animate-spin-slow 
                    bg-[conic-gradient(#ff00af,#ffcc00,#00bbbb,#0000ff,#ff00af)]" />
                  </div>
                  
                  {/* Inner */}
                  <div className="absolute inset-[3px] rounded-xl bg-black z-10 overflow-hidden">
                    <img src={AboutImg} alt="About Me" className="w-full h-full object-cover"/>
                  </div>
                </div>
        </motion.div>
        
        {/* RIGHT CONTENT */}
        <motion.div className="text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}>
          
          <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-3 whitespace-nowrap">
            <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Mohammad Ajaz Shah</span>
          </h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">
            Full Stack AI Developer
          </h3>
          
          <p className="text-gray-400 max-w-lg leading-relaxed mb-6">
            I build scalable web applications and AI-powered solutions that solve real-world problems. 
            Passionate about clean design, performance optimization, and creating impactful digital products.
          </p>
          
          {/* STATS */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {/* BOX 1 */}
            <div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-center">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Experience</h4>
              <p className="text-gray-400 text-xs">2+ Years</p>
            </div>
            
            {/* BOX 2 */}
            <div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-center">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Expertise</h4>
              <p className="text-gray-400 text-xs">MERN + AI</p>
            </div>
            
            {/* BOX 3 */}
            <div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-center">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Focus</h4>
              <p className="text-gray-400 text-xs">Scalable Apps</p>
            </div>
          </div>
          
          {/* BUTTONS */}
          <motion.div className="mt-4 mb-6 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#" className="px-6 py-2 rounded-full font-semibold text-white 
              bg-gradient-to-r from-[#ff00af] to-[#ffcc00] border-2 border-yellow-400 transition-all duration-300
              hover:shadow-[0_0_20px_rgba(255,0,175,0.6)] hover:scale-105">
              Let's Connect
            </a>
        
            <a href="#" className="relative px-6 py-2 rounded-full font-semibold text-white
              transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,175,0.6)]
              before:absolute before:inset-0 before:rounded-full before:p-[3px]
              before:bg-gradient-to-r before:from-[#ff00af] before:to-[#ffcc00] before:content-['']
              after:absolute after:inset-[2px] after:rounded-full
            after:bg-black after:content-['']
              hover:after:bg-gradient-to-r hover:after:from-[#ff00af] hover:after:to-[#ffcc00]">
              <span className="relative z-10">View Projects</span>
            </a>
          </motion.div>
      </motion.div>

      </div>
    </section>
  );
}