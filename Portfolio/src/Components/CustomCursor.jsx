import { useState, useEffect } from "react";

export default function CustomCursor(){

  const [position, setPosition] = useState({x:0, y:0});

  useEffect(() => {

    const moveHandler = (e) => {
      setPosition({x: e.clientX, y: e.clientY});
    };

    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };

  }, []);

  return(

    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform:`translate3d(${position.x - 40}px, ${position.y - 40}px,0)`
      }}
    >

      <div
        className="w-24 h-24 rounded-full blur-3xl opacity-80"
        style={{
          background:"linear-gradient(90deg,#ff00af,#ffcc00)"
        }}
      />

    </div>

  );
}