import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { SiAirtable } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* 🔥 Glowing Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00]" />
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#ff00af] to-[#ffcc00] blur-md opacity-70" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-4">

        {/* 🎬 Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          {/* Logo with hover scale */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <SiAirtable className="text-3xl bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent" />
          </motion.div>

          {/* Text */}
          <p className="text-sm md:text-base font-semibold">
            Design & Developed by{" "}

            {/* ✨ Gradient Name + Hover Glow */}
            <span className="relative font-semibold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
              Mohammad Ajaz Shah
            </span>

            {/* ❤️ Animated Heart */}
            <motion.span
              whileHover={{ scale: 1.3 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block ml-2"
            >
              <FaHeart className="text-red-500" />
            </motion.span>
          </p>
        </motion.div>

        {/* 🧊 Bottom Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs md:text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300"
        >
          © - {new Date().getFullYear()} All rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;