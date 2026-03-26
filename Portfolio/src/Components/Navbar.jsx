import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import OverlayMenu from "./OverlayMenu";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
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

  // ✅ SCROLL SPY (AUTO ACTIVE SECTION)
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = item.id;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR (ALWAYS VISIBLE) */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-[999] bg-black/40 backdrop-blur-lg">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-1 cursor-pointer">
          <img
            src={Logo}
            alt="logo"
            className="w-14 h-14 object-contain transition-all duration-300 hover:scale-110"
          />
          <span className="text-4xl font-bold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
            Ajaz
          </span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center bg-black px-2 py-2 rounded-full gap-2 border-[3px] border-white/15">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();  // 🔥 prevent default jump
                setActive(item.id); // 🔥 instant highlight

                const section = document.getElementById(item.id);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative px-4 py-2 text-xl font-bold"
            >

              {/* ACTIVE BACKGROUND */}
              {active === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full 
                  bg-gradient-to-r from-[#ff00af] to-[#ffcc00] 
                  border border-yellow-400 z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              <span className="relative z-10 text-white">
                {item.name}
              </span>

            </a>
          ))}

        </div>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group px-[2px] py-[2px] rounded-full 
            bg-gradient-to-r from-[#ffcc00] to-[#ffcc00] inline-block"
          >
            <span
              className="block px-3 py-2 rounded-full bg-gradient-to-r from-[#ff00af] to-[#ffcc00] text-white font-bold 
              transition-all duration-300 
              group-hover:from-[#ffcc00] 
              group-hover:to-[#ff00af] 
              group-hover:shadow-[0_0_25px_#ff00af]"
            >
              Let’s Connect
            </span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center w-10 h-10 text-white text-3xl 
            rounded-full bg-black border-2 border-white/20
            transition-all duration-300 hover:bg-white/10"
          >
            <TiThMenu />
          </button>
        </div>

      </nav>

      {/* MOBILE MENU */}
      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

