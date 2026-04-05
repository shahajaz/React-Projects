import { motion } from "framer-motion";
import image from "../assets/os.png";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Paramount Software Solutions, Inc",
    logo: image, // ✅ FIXED
    date: "Aug 2023 - Present",
    location: "Remote",
    description:
      "Worked on FarmToPlate (FTP), improving performance and building scalable UI with React.",
    achievements: [
      "Improved product performance by 40%",
      "Mentored junior developers",
      "Led team of 5 developers",
    ],
    tech: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind"],
  },
  {
    role: "Web Developer",
    company: "CT Solutions Private Limited",
    logo: image, // ✅ IMPORTANT FIX
    date: "May 2022 - July 2023",
    location: "India",
    description:
      "Started as intern → promoted to Web Developer. Built scalable web apps.",
    achievements: [
      "Built responsive apps using React & Next.js",
      "Worked on good-looking UI/UX",
      "Received Star Performer Award",
    ],
    tech: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section
      id="experience"
      className="min-h-[130vh] flex flex-col items-center pt-24 pb-40 relative text-white bg-[#2F4F4F] px-6 overflow-hidden scroll-mt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,175,0.2),transparent_70%)] pointer-events-none"></div>

      {/* Heading */}
      <motion.div className="mb-14 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>

        <h2 className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full bg-black/80 backdrop-blur-md relative inline-block mx-auto">
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
            <span className="block w-full h-full rounded-full bg-black"></span>
          </span>
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>

        <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
          A timeline that reflects my{" "}
          <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
            journey of growth and innovation
          </span>
          , built through hands-on experience, continuous learning, and impactful projects.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div className="relative max-w-6xl mx-auto py-3"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        
        {/* Center Line (Fixed height + clean) */}
        <div className="absolute top-8 bottom-20 left-1/2 -translate-x-1/2 w-[3px] rounded-xl bg-gradient-to-b from-[#ff00af] to-[#ffcc00]"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative mb-20 flex ${
              index % 2 === 0 ? "justify-start pr-12" : "justify-end pl-12"}`}>
                
                {/* Card */}
                <div className="relative w-[50%] p-[1px] rounded-xl bg-gradient-to-b from-[#ff00af] to-[#ffcc00]">
                  
                  {/* Inner Card */}
                  <div className="bg-[#0d0d0d] rounded-2xl p-8 h-full">
                    <h3 className="text-xl font-semibold text-[#ffcc00] leading-tight">{exp.role}</h3>
                    
                    {/* Company + Logo */}
                    <div className="flex items-center gap-3 mt-3">
                      <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain rounded-md bg-white/10 p-1 border border-white/10"/>
                      <p className="text-sm text-gray-400 font-medium">
                        {exp.company}
                        </p>
                      </div>
                      
                      {/* Date */}
                      <p className="text-xs text-gray-500 mt-1 ml-14">
                        {exp.date} • {exp.location}
                      </p>
                      
                      {/* Description */}
                      <p className="mt-5 text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <ul className="mt-5 space-y-2 text-sm text-gray-300">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#ff00af] mt-[2px]">•</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Tech */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 text-xs bg-[#ff00af]/10 text-[#ffcc00] rounded-full border border-[#ff00af]/30">{t}</span>))}
                      </div>
                    </div>
                  </div>
                
                  {/* Timeline Dot (Perfectly centered) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0">
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-5 h-5 bg-gradient-to-b from-[#ff00af] to-[#ffcc00] rounded-full border-4 border-black shadow-[0_0_25px_#ff00af,0_0_50px_#ff00af]"/>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        );
  }