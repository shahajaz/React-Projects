import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Images
import c from "../assets/C.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import JavaScript from "../assets/js.png";
import SQL from "../assets/sql.png";

import react from "../assets/react.png";
import html from "../assets/html.png";
import next from "../assets/next.png";
import bootstrap from "../assets/bootstrap.png";
import typescript from "../assets/typescript.png";
import tailwind from "../assets/tailwind.png";

import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import go from "../assets/golang.png";

import Git from "../assets/git.png";
import Docker from "../assets/docker.png";
import aws from "../assets/aws.png";
import kubernetes from "../assets/kubernetes.png";
import cicd from "../assets/cicd.png";
import seo from "../assets/seo.png";
import kafka from "../assets/kafka.png";
import figma from "../assets/figma.png";
import vscode from "../assets/vscode.png";
import cursor from "../assets/cursor.png";
import linux from "../assets/linux.png";

export default function Skills() {
  const [active, setActive] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Loader states
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [progress, setProgress] = useState(0);

  const buttons = ["All", "Languages", "Frontend", "Backend", "Tools/Others"];

  const skillsData = {
    Languages: [
      { name: "C", img: c, level: 85, problemsSolved:"150+"},
      { name: "Java", img: java, level: 85, problemsSolved:"500+"},
      { name: "Python", img: python, level: 80, problemsSolved:"100+"},
      { name: "JavaScript", img: JavaScript, level: 85, projects:"150+" },
      { name: "SQL", img: SQL, level: 75, projects:"25+" },
    ],

    Frontend:[
      { name: "React.js", img: react, level: 85, projects:"25+"},
      { name: "HTML/CSS", img: html, level: 90, projects: "45+" },
      { name: "Next.js", img: next, level: 80, projects: "25+" },
      { name: "Bootstrap", img: bootstrap, level: 85, projects: "15+" },
      { name: "TypeScript", img: typescript, level: 80, projects: "25+" },
      { name: "Tailwind CSS", img: tailwind, level: 85, projects: "45+" },
    ],

    Backend: [
      { name: "Node.js", img: node, level: 80, projects:"15+" },
      { name: "Express.js", img: express, level: 80, projects:"15+" },
      { name: "MongoDB", img: mongodb, level: 80, projects:"15+" },
      { name: "Go", img: go, level: 75, projects:"5+" },
    ],

    "Tools/Others": [
      { name: "GitHub", img: Git, level: 90, projects:"100+"},
      { name: "Docker", img: Docker, level: 75, projects: "5+"},
      { name: "AWS", img: aws, level: 75, projects: "5+"},
      { name: "Kubernetes", img: kubernetes, level: 75, projects: "5+"},
      { name: "CI/CD", img: cicd, level: 75, projects: "5+"},
      { name: "SEO", img: seo, level: 85, projects:"10+"},
      { name: "Cursor", img: cursor, level: 70, projects:"5+"},
      { name: "Kafka", img: kafka, level: 75, projects: "5+"},
      { name: "Figma", img: figma, level: 80, projects: "15+"},
      { name: "VS Code", img: vscode, level: 90, projects:"100+"},
      { name: "Linux", img: linux, level: 75, projects:"5+"},
    ],
  };

  const getSkills = () => {
    if (active === "All") return Object.values(skillsData).flat();
    return skillsData[active] || [];
  };

  const filteredSkills = getSkills();

  return (
    <section id="skills" className="min-h-[120vh] flex flex-col pt-20 md:pt-24 pb-20 md:pb-24 relative text-white bg-[#021c1e] px-6 overflow-hidden scroll-mt-24">

      {/* Heading */}
      <motion.div className="text-center mb-6"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
        <h2 className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full bg-black/80 backdrop-blur-md relative inline-block mx-auto">
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
            <span className="block w-full h-full rounded-full bg-black"></span>
          </span>
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
          An overview of my{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            technical skill set
          </span>
            , built through hands-on experience with{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            modern tools and technologies
          </span>
            , enabling me to deliver{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            scalable and high-performance applications
          </span>
          .
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 mb-6 max-w-5xl mx-auto justify-items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`px-3 py-2 rounded-full text-xs border ${
              active === btn
                ? "bg-gradient-to-r from-[#ff00af] to-[#ffcc00] text-white font-semibold border-2 border-yellow-400"
                : "border-2 border-[#ff00af] text-white bg-black"
            }`}
          >
            {btn}
          </button>
        ))}
      </motion.div>

      {/* Skills Container */}
      <motion.div className="w-full mx-auto border border-orange-500/20 rounded-xl p-6 bg-black"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >

        {/* Label */}
        <div className="mb-4">
          <span className="px-4 py-1 rounded-full text-sm font-semibold 
            bg-gradient-to-r from-[#ff00af] to-[#ffcc00] text-black">
            {active}
          </span>
        </div>

        {/* Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => {
                setLoadingIndex(i);
                setProgress();

                let value = 0;

                const interval = setInterval(() => {
                  value += 5;
                  setProgress(value);

                  if (value >= 100) {
                    clearInterval(interval);
                    setLoadingIndex(null);
                    setHoveredSkill(skill);
                  }
                }, 25);
              }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col justify-between px-2 py-2 rounded-lg border border-white/10 bg-[#0c1624] cursor-pointer"
            >
              {/* Top content */}
              <div className="flex items-center gap-3">

                {/* Image */}
                <div className="bg-black p-2 rounded-lg">
                  <img src={skill.img} alt={skill.name} className="w-12 h-12"/>
                </div>

                <span className="text-xl text-yellow-400">{skill.name}</span>

                <span className="w-6 h-6 flex items-center justify-center text-[#ff00af] text-md bg-black/80 rounded-full border border-white/20 hover:shadow-[0_0_10px_rgba(255,0,175,0.5)] transition">›</span>
              </div>

              {/* 🔥 Loader INSIDE CARD (BOTTOM) */}
              {loadingIndex === i && (
                <div className="mt-3">
                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#ff00af] to-[#ffcc00]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>

                  <p className="text-[10px] text-gray-400 mt-1 text-right">
                    {progress}%
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div className="fixed inset-0 flex items-center justify-center z-50 bg-orange-300/10 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
              
              {/* Gradient Border */}
              <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#ff00af] to-[#ffcc00] w-[95%] max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative bg-[#000] rounded-2xl p-6">
                    
                    {/* LEFT BUTTON */}
                    <button onClick={() => {
                      const currentIndex = filteredSkills.findIndex(
                        (s) => s.name === hoveredSkill.name);
                        const prevIndex =
                        currentIndex === 0 ? filteredSkills.length - 1 : currentIndex - 1;
                        setHoveredSkill(filteredSkills[prevIndex]);
                      }}
                      className="absolute left-4 bottom-8 bg-black border border-white/30 p-2 rounded-full hover:shadow-lg transition">
                        <FaChevronLeft size={16} />
                    </button>
                    
                    {/* RIGHT BUTTON */}
                    <button onClick={() => {
                      const currentIndex = filteredSkills.findIndex(
                      (s) => s.name === hoveredSkill.name);
                      const nextIndex =
                      currentIndex === filteredSkills.length - 1 ? 0 : currentIndex + 1;
                      setHoveredSkill(filteredSkills[nextIndex]);}}
                      className="absolute right-4 bottom-8 bg-black border border-white/30 p-2 rounded-full hover:shadow-lg transition">
                      <FaChevronRight size={16} />
                    </button>
                    
                    {/* Close */}
                    <button onClick={() => setHoveredSkill(null)}
                      className="absolute top-4 right-4 bg-black/40 p-2 rounded-full hover:bg-black/70">
                      <FaTimes size={14} />
                    </button>
                    
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#152447] p-3 rounded-lg">
                        <img src={hoveredSkill.img} className="w-10 h-10" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-[#ff00af]">
                        {hoveredSkill.name}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6">
                      I've worked with {hoveredSkill.name} to build dynamic,
                      scalable and high-performance applications with clean
                      architecture and optimized performance.
                    </p>
                    
                    {/* CENTER STATS */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-white/10 bg-[#0f172a]">
                      <p className="text-sm text-[#ffcc00] mb-3">
                        Experience Level
                      </p>

                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${hoveredSkill.level || 80}%` }}
                          className="h-full bg-gradient-to-r from-[#ff00af] to-[#ffcc00]"/>
                      </div>

                      <div className="flex justify-end mt-2">
                        <span className="text-xs text-[#ffcc00]">
                          {hoveredSkill?.level <= 45
                            ? "Beginner"
                            : hoveredSkill?.level <= 75
                            ? "Intermediate"
                            : "Advanced"
                          }
                        </span>
                      </div>
                    </div>
                    
                    {/* Projects */}
                    <div className="p-4 rounded-xl border border-white/10 bg-[#0f172a] flex flex-col justify-center">
                      {(() => {const item = {
                        label: hoveredSkill?.problemsSolved ? "Problems Solved" : "Projects Completed",
                        value: hoveredSkill?.problemsSolved || hoveredSkill?.projects
                      };
                      return null;
                      })()}
                      
                      <p className="text-sm text-[#ffcc00]">
                        {hoveredSkill?.problemsSolved ? "Problems Solved" : "Projects Completed"}</p>
                      
                      <div className="flex justify-center mt-2">
                        <p  className="text-2xl font-bold text-[#ff00af]">
                          {hoveredSkill?.problemsSolved || hoveredSkill?.projects}
                        </p>
                      </div>
                    </div>
                  </div>
                
                {/* Icons */}
                <div className="flex justify-center gap-3 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                  {filteredSkills.map((s, i) => (
                    <div key={i} className={`p-2 rounded-lg border ${
                      s.name === hoveredSkill.name
                      ? "bg-[#152447]"
                      : "border border-gray-600 bg-[#0c1624]"}`}>
                      <img src={s.img} className="w-8 h-8" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}