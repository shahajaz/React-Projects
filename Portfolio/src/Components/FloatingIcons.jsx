import { motion } from "framer-motion";
import { useMemo } from "react";
import {
FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaGithub
} from "react-icons/fa";
import {
SiMongodb, SiJavascript, SiTailwindcss, SiPython, SiOpenai
} from "react-icons/si";

const baseIcons = [
{ Icon: FaReact, color: "#61DBFB" },
{ Icon: FaNodeJs, color: "#3C873A" },
{ Icon: SiMongodb, color: "#4DB33D" },
{ Icon: SiJavascript, color: "#F7DF1E" },
{ Icon: FaHtml5, color: "#E34C26" },
{ Icon: FaCss3Alt, color: "#264de4" },
{ Icon: SiTailwindcss, color: "#38BDF8" },
{ Icon: FaJava, color: "#f89820" },
{ Icon: SiPython, color: "#3776AB" },
{ Icon: FaGithub, color: "#ffffff" },
{ Icon: SiOpenai, color: "#10A37F" },
];

export default function FloatingIcons() {

const icons = useMemo(() => {
return baseIcons.map((item) => ({
...item,
top: Math.random() * 100,
left: Math.random() * 100,
duration: 12 + Math.random() * 8, // 12–20 sec
}));
}, []);

return ( <div className="absolute inset-0 pointer-events-none opacity-70">
{icons.map((item, i) => (
<motion.div
key={i}
className="absolute"
style={{
top: `${item.top}%`,
left: `${item.left}%`,
}}
animate={{
y: [0, -20, 0],
x: [0, 15, 0],
rotate: [0, 10, -10, 0],
scale: [1, 1.1, 1],
}}
transition={{
duration: item.duration,
repeat: Infinity,
ease: "easeInOut",
}}
>
<item.Icon size={26} color={item.color} />
</motion.div>
))} </div>
);
}
