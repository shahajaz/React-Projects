import { motion, AnimatePresence } from "framer-motion";

export default function OverlayMenu({ isOpen, onClose }) {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Menu Content */}
          <motion.div
            className="flex flex-col items-center justify-center h-full gap-8 text-white text-3xl font-bold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <a href="#home" onClick={onClose}>Home</a>
            <a href="#about" onClick={onClose}>About Me</a>
            <a href="#skills" onClick={onClose}>Skills</a>
            <a href="#projects" onClick={onClose}>Projects</a>
            <a href="#experience" onClick={onClose}>Experience</a>
            <a href="#testimonial" onClick={onClose}>Testimonials</a>
            <a href="#contact" onClick={onClose}>Contact Me</a>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}