import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function OverlayMenu({ isOpen, onClose }) {

  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact Me", id: "contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black backdrop-blur-md z-[999] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-4">

            <div className="flex items-center gap-1">
              <img src={Logo} className="w-12 h-12"/>
              <span className="text-4xl font-bold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
                Ajaz
              </span>
            </div>

            <div className="p-[2px] rounded-full bg-transparent 
              hover:bg-transparent transition-all duration-300">
                
                <button onClick={onClose} className="flex items-center justify-center w-10 h-10 text-white text-3xl rounded-full bg-white/5 border border-white/10 
                  transition-all duration-300 hover:bg-white/10 hover:scale-110">
                  <MdClose />
                </button> 
            </div>

          </div>

          <motion.div className="flex flex-col items-center justify-center flex-1 gap-5 text-lg font-semibold"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4 }}>
              
              {navItems.map((item) => (
                <button key={item.id} onClick={() => {
                  setActive(item.id);
                  const section = document.getElementById(item.id);
                  onClose();
                  
                  setTimeout(() => {section?.scrollIntoView({ behavior: "smooth" });}, 200);
                }}
                className="relative px-4 py-2 rounded-full">
                  
                  {active === item.id && (
                    <motion.div className="absolute inset-0 rounded-full 
                      bg-gradient-to-r from-[#ff00af] to-[#ffcc00] 
                      border border-white/20 z-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25 }}/>
                    )}
                    
                    <span className={`relative z-10 ${
                      active === item.id ? "text-white" : "text-white"
                      }`}>
                      {item.name}
                    </span>
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>
  );
}