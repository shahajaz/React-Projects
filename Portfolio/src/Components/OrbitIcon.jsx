export default function OrbitIcon({ children }) {
  return (
    <div
      className="
      p-2 sm:p-3
      rounded-full 
      bg-gradient-to-r from-[#ff00af] to-[#ffcc00]
      text-white
      text-base sm:text-lg
      shadow-[0_0_15px_#ff00af]
      transition-all duration-300
      hover:scale-125
      hover:shadow-[0_0_25px_#ffcc00]
    "
    >
      {children}
    </div>
  );
}