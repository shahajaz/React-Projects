import { motion } from "framer-motion";

export default function Projects(){

  return(
    <section id="experience" className="min-h-[120vh] flex flex-col items-center pt-20 md:pt-24 relative text-white px-6 overflow-hidden scroll-mt-24">

      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
              
        <h2 className="text-3xl md:text-4xl font-semibold px-6 py-3 rounded-full 
          bg-black/80 backdrop-blur-md relative inline-block mx-auto">
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] -z-10">
              <span className="block w-full h-full rounded-full bg-black"></span>
            </span>
            <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Professional Experience</span>
          </h2>
          
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
            A timeline of my{" "}
            <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
              professional journey
            </span>
            , showcasing impactful{" "}
            <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
              roles, achievements, and contributions
            </span>{" "}
              that demonstrate my ability to build{" "}
            <span className="bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent font-semibold">
              scalable, production-grade systems
            </span>{" "}
            across diverse domains.
          </p>

      </motion.div>
    </section>
  )
} 