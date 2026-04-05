import React from "react";
import { motion } from "framer-motion";
import image from "../assets/contact.png";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

import {FaGithub, FaLinkedin, FaInstagram, FaGlobe, FaYoutube,} from "react-icons/fa";

const Contact = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="min-h-[120vh] flex flex-col items-center pt-20 md:pt-24 pb-20 md:pb-24 relative text-white bg-[#021c1e] px-6 overflow-hidden scroll-mt-24">

      <motion.div className="mb-4 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut"}}>
        
        <h2 className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full bg-black/80 backdrop-blur-md relative inline-block mx-auto">
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
            <span className="block w-full h-full rounded-full bg-black"></span>
          </span>
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
            Contact Me
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
      
      {/* Outer Gradient Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut"}}
        className="bg-gradient-to-b from-[#ff00af] to-[#ffcc00] p-[2px] rounded-2xl w-full max-w-6xl">
        
        {/* Inner Container */}
        <div className="bg-black rounded-xl p-8 grid md:grid-cols-2 gap-8">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] p-[2px] rounded-xl">
            <div className="bg-[#0a0a0a] rounded-xl p-6 h-full flex flex-col justify-between relative overflow-hidden">

              {/* Heading */}
              <div>
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-3 mb-4">
                    
                    {/* Icon with gradient border */}
                    <div className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] p-[2px] rounded-full">
                      <motion.div className="bg-black p-2 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}>
                          <FaHandshakeAngle className="text-yellow-400 text-lg" />
                      </motion.div>
                    </div>
                    
                    {/* Text */}
                    <motion.h2 className="text-yellow-400 text-2xl font-bold"
                      whileHover={{ scale: 1.02 }}>
                        Let's get in touch
                    </motion.h2>
                  </motion.div>

                {/* Illustration */}
                <motion.div
                  className="relative flex justify-center items-center mb-6"
                  variants={fadeUp}
                >
                  <motion.img
                    src={image}   // ✅ FIXED
                    alt="contact illustration"
                    className="w-64 md:w-72 object-contain z-10"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Floating Elements (matches your design feel) */}
                  <motion.div
                    className="absolute top-4 left-6 text-pink-500 text-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✉️
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 right-6 text-yellow-400 text-xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    💬
                  </motion.div>

                  <motion.div
                    className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Social Icons */}
              <motion.div variants={fadeUp}>
                <p className="text-gray-400 font-semibold mb-2">Connect with me:</p>
                <div className="flex items-center gap-4">
                  
                  {[
                    { Icon: FaLinkedin, link: "https://www.google.com/", color:"#00a6ff"},
                    { Icon: FaInstagram, link: "#", color: "#ff00af" },
                    { Icon: HiOutlineMail, link: "mailto:your-email@example.com", color: "#ffc000" },
                    { Icon: FaGithub, link: "#", color: "" },
                    { Icon: FaXTwitter, link: "https://twitter.com/yourusername", color: "" },
                  ].map(({ Icon, link, color }, i) => (
                  
                  <motion.a
                    key={i} href={link} target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 border-2 border-white/20 rounded-full transition-all duration-300 flex items-center justify-center"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = color;
                      e.currentTarget.style.boxShadow = `0 0 15px ${color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                    }}> 
                    <Icon className="text-white text-xl" />
                  </motion.a>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] p-[2px] rounded-xl">
              
              <div className="bg-[#0a0a0a] rounded-[calc(0.75rem-2px)] p-6 h-full">
                <motion.h2
                  variants={fadeUp} className="text-white text-2xl font-bold mb-6 text-center">
                    Send a Message
                </motion.h2>
                
                <form className="space-y-4"
                  onSubmit={(e) => {e.preventDefault();
                    alert("Form submitted successfully 🚀");
                  }}>
                  
                  {/* Name */}
                  <motion.input
                    variants={fadeUp}
                    type="text" name="name" placeholder="Name" required
                    className="w-full bg-transparent border border-pink-500 rounded-full px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_8px_#ff00af]"
                    whileFocus={{ scale: 1.03 }}/>
                    
                    {/* Phone */}
                    <motion.input
                      variants={fadeUp}
                      type="tel" name="phone" placeholder="Phone" required
                      className="w-full bg-transparent border border-pink-500 rounded-full px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_8px_#ffcc00]"
                      whileFocus={{ scale: 1.03 }}/>
                      
                      {/* Email */}
                      <motion.input
                        variants={fadeUp}
                        type="email" name="email" placeholder="Email" required
                        className="w-full bg-transparent border border-pink-500 rounded-full px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_8px_#ff00af]"
                        whileFocus={{ scale: 1.03 }}
                      />
                      
                      {/* Message */}
                      <motion.textarea
                        variants={fadeUp}
                        name="message" placeholder="Message" rows="6"
                        className="w-full bg-transparent border border-pink-500 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_8px_#ffcc00]"
                        whileFocus={{ scale: 1.02 }}
                      />
                      
                      {/* Button */}
                      <motion.button
                        variants={fadeUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit" className="w-full bg-gradient-to-r from-[#ff00af] to-[#ffcc00] text-white py-2 rounded-full font-semibold shadow-lg hover:shadow-[0_0_15px_#ff00af] flex items-center justify-center gap-4">
                          Submit
                        <IoIosSend className="text-lg" />
                      </motion.button>
                      
                </form>
              </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;