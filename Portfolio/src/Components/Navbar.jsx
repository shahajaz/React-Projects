// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Logo from "../assets/logo.png";
// import { TiThMenu } from "react-icons/ti";
// import OverlayMenu from "./OverlayMenu";


// export default function Navbar(){

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active, setActive] = useState("home");

//   useEffect(() => {
//     const homseSection = document.querySelector("#home";
//       const observer = new IntersectionObserver(

//       )
//     )
//   })

//   const navItems = [
//     { name: "Home", id: "home" },
//     { name: "About Me", id: "about" },
//     { name: "Skills", id: "skills" },
//     { name: "Projects", id: "projects" },
//     { name: "Experience", id: "experience" },
//     { name: "Testimonials", id: "testimonials" },
//     { name: "Contact Me", id: "contact" },
//   ];

//   return(
//     <>
//       <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50">
        
//         <div className="flex items-center gap-1 cursor-pointer">
//           <img src={Logo} className="w-14 h-14 object-contain transition-all duration-300 hover:scale-110"/>
//           <span className="text-4xl font-bold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Ajaz</span>
//           </div>


//         <div className="hidden lg:flex items-center bg-black px-2 py-2 rounded-full gap-2 border-[3px] border-white/15">

//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActive(item.id)}
//               className="relative px-4 py-2 text-xl font-bold">


//               {active === item.id && (
//                 <motion.div
//                   className="absolute inset-0 rounded-full 
//                   bg-gradient-to-r from-[#ff00af] to-[#ffcc00] 
//                   border border-white/10 z-0"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.25 }}
//                 />
//               )}

//               <span className={`relative z-10 ${
//                 active === item.id ? "text-white" : "text-white"
//               }`}>
//                 {item.name}
//               </span>

//             </button>
//           ))}

//         </div>

//         <div className="hidden lg:block">
//           <a
//             href="#contact"
//             className="group px-[2px] py-[2px] rounded-full 
//             bg-gradient-to-r from-[#ff00af] to-[#ffcc00] inline-block"
//           >
//             <span
//               className="block px-3 py-2 rounded-full bg-black text-white font-semibold 
//               transition-all duration-300 
//               group-hover:bg-gradient-to-r 
//               group-hover:from-[#ff00af] 
//               group-hover:to-[#ffcc00] 
//               group-hover:shadow-[0_0_20px_#ff00af]"
//             >
//               Let’s Connect
//             </span>
//           </a>
//         </div>


//         <div className="lg:hidden p-[2px] rounded-full bg-transparent 
//           hover:bg-transparent transition-all duration-300">
            
//             <button onClick={() => setMenuOpen(true)}
//               className="flex items-center justify-center w-10 h-10 text-white text-3xl 
//                 rounded-full bg-black border-2 border-white/20
//                 transition-all duration-300 hover:bg-white/10"> 
//               <TiThMenu />
//               </button>
//         </div>
        

//       </nav>

//       <OverlayMenu 
//         isOpen={menuOpen} 
//         onClose={() => setMenuOpen(false)} 
//       />
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import OverlayMenu from "./OverlayMenu";

export default function Navbar(){

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(true);

  // ✅ SCROLL LOGIC (HIDE / SHOW NAVBAR)
  useEffect(() => {

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // scroll down → hide
      } else {
        setVisible(true); // scroll up → show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact Me", id: "contact" },
  ];

  return(
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 
        transition-transform duration-300 ease-in-out 
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        
        {/* LOGO */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img 
            src={Logo} 
            className="w-14 h-14 object-contain transition-all duration-300 hover:scale-110"
          />
          <span className="text-4xl font-bold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
            Ajaz
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center bg-black px-2 py-2 rounded-full gap-2 border-[3px] border-white/15">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative px-4 py-2 text-xl font-bold"
            >

              {/* ACTIVE BACKGROUND */}
              {active === item.id && (
                <motion.div
                  className="absolute inset-0 rounded-full 
                  bg-gradient-to-r from-[#ff00af] to-[#ffcc00] 
                  border border-yellow-400 z-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                />
              )}

              <span className="relative z-10 text-white">
                {item.name}
              </span>

            </button>
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
              group-hover:bg-gradient-to-r 
              group-hover:from-[#ffcc00] 
              group-hover:to-[#ff00af] 
              group-hover:shadow-[0_0_25px_#ff00af]"
            >
              Let’s Connect
            </span>
          </a>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden p-[2px] rounded-full">
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

      {/* MOBILE OVERLAY */}
      <OverlayMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
      />
    </>
  );
}