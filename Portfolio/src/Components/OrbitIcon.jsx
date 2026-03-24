export default function OrbitIcon({ children }) {
  return (
    <div
      className="
      p-2 sm:p-3
      rounded-full 
      bg-white/20 backdrop-blur-md
      text-white
      text-lg
      shadow-[0_0_15px_rgba(255,255,255,0.3)]
      transition-all duration-300
      hover:scale-125
      hover:shadow-[0_0_25px_#ff00af]
    "
    >
      {children}
    </div>
  );
}