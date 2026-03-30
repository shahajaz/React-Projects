import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

// ✅ Import Images (example paths – adjust as per your assets folder)
// import reactImg from "../assets/react.png";
// import nextImg from "../assets/next.png";
// import tsImg from "../assets/typescript.png";
// import jsImg from "../assets/Js.png";
// import htmlImg from "../assets/htmlcss.png";
// import tailwindImg from "../assets/tailwind.png";

// import nodeImg from "../assets/node.png";
// import mongoImg from "../assets/mongodb.png";
// import postgresImg from "../assets/sql.png";

// import githubImg from "../assets/git.png";
// import figmaImg from "../assets/figma.png";
// import dockerImg from "../assets/docker.png";
// import awsImg from "../assets/aws.png";
// import k8sImg from "../assets/kubernetes.png";

// ✅ Languages Images
import cImg from "../assets/C.png";
// import javaImg from "../assets/java.png";
// import pythonImg from "../assets/python.png";
// import sqlImg from "../assets/sql.png";
// import goImg from "../assets/sql.png";

// ✅ AI Tools Images (optional but recommended)
// import openaiImg from "../assets/gpt.png";
// import huggingfaceImg from "../assets/gpt.png";

export default function Skills() {
  const [active, setActive] = useState("All");

  const [selectedSkill, setSelectedSkill] = useState(null);
const [progress, setProgress] = useState(0);
const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
  let interval;

  if (hoveredSkill) {
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSelectedSkill(hoveredSkill); // ✅ open modal
          return 100;
        }
        return prev + 5;
      });
    }, 50); // speed control
  }

  return () => clearInterval(interval);
}, [hoveredSkill]);

  // ✅ Added Languages Button
  const buttons = ["All", "Languages", "Frontend", "Backend", "Tools/Others"];

  // ✅ Skills Data with Images
  const skillsData = {
    Languages: [
      { name: "C", img: cImg },
      /*  { name: "Java", img: javaImg },
      { name: "Python", img: pythonImg },
      { name: "SQL", img: sqlImg },
      { name: "JavaScript", img: jsImg },
      { name: "GoLang", img: goImg }, */
    ],

 /*    Frontend: [
      { name: "React.js", img: reactImg },
      { name: "Next.js", img: nextImg },
      { name: "TypeScript", img: tsImg },
      { name: "JavaScript", img: jsImg },
      { name: "HTML/CSS", img: htmlImg },
      { name: "Tailwind CSS", img: tailwindImg },
    ], */

   /*  Backend: [
      { name: "Node.js", img: nodeImg },
      { name: "MongoDB", img: mongoImg },
      { name: "PostgreSQL", img: postgresImg },
    ], */

    /* "Tools/Others": [
      { name: "GitHub", img: githubImg },
      { name: "Figma", img: figmaImg },
      { name: "Docker", img: dockerImg },
      { name: "AWS", img: awsImg },
      { name: "Kubernetes", img: k8sImg },

      // ✅ Added AI-related (as requested)
      { name: "OpenAI API", img: openaiImg },
      { name: "HuggingFace", img: huggingfaceImg },
    ], */
  };

  // ✅ Filter Logic
  const getSkills = () => {
    if (active === "All") {
      return Object.values(skillsData).flat();
    }
    return skillsData[active] || [];
  };

  const filteredSkills = getSkills();

  // Glow effects
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px]",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section id="skills" className="min-h-[120vh] flex flex-col items-center pt-20 md:pt-24 relative text-white px-6 overflow-hidden scroll-mt-24">
      {/* Glow */}
      {glows.map((c, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-to-r from-[#00bbbb] to-[#0000ff] ${c} -z-10`}
        />
      ))}

      {/* Heading */}
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full 
          bg-black/80 backdrop-blur-md relative inline-block mx-auto">
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
              <span className="block w-full h-full rounded-full bg-black"></span>
            </span>
            <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Skills</span>
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
      <motion.div className="grid grid-cols-5 gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}>
  
        {buttons.map((btn) => {
        const isActive = active === btn;

        return (
        <motion.button
          key={btn} onClick={() => setActive(btn)} whileTap={{ scale: 0.96 }}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`w-full text-xs px-2 py-2 rounded-full border-2 transition-all duration-300
          ${isActive
            ? "bg-gradient-to-r from-[#ff00af] to-[#ffcc00] text-black text-xs font-semibold border-transparent"
            : "border-white/20 text-white bg-transparent"
            }`}
          >
          {btn}
        </motion.button>
        ); })}
      </motion.div>

      {/* Container */}
      <div className="w-full max-w-7xl rounded-2xl border border-purple-500/30 p-4 bg-[#070d18]">

        {/* Dynamic Heading */}
        <h2 className="text-xl font-medium mb-1 inline-block">
          <span className={`px-4 py-1 rounded-full 
          ${active
            ? "bg-gradient-to-r from-[#ff00af] to-[#ffcc00] text-white font-medium"
            : "bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent"
          }`}>
          {active}
          </span>
        </h2>

        {/* Skills Grid */}
        



      </div>
    </section>
  );
}