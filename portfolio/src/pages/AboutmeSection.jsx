// src/components/AboutMe.jsx
import React, { useState, useEffect } from "react";
import eyeImg from "../assets/Eye.png";
import thorneImg from "../assets/thorn.png";

export default function AboutMe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about-me"
      className="relative w-full py-16 md:py-32 overflow-hidden min-h-screen flex items-center bg-primaryBg"
    >
      {/* Fondo de ruido muy sutil */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {/* Contenedor principal - cambia a columna en móvil */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-4">
          
          {/* Ojo Superior/Izquierdo - más grande */}
          <div className="relative w-full md:w-1/4 flex justify-center scale-x-[-1] order-1 md:order-1">
            <div className="relative">
              <img
                src={eyeImg || "/placeholder.svg"}
                alt="cyber eye left"
                className="w-64 h-40 md:w-72 md:h-48 lg:w-96 lg:h-64 object-contain"
                style={{ filter: "contrast(1.2) drop-shadow(0 0 10px rgba(189, 153, 119, 0.4))" }}
              />
              {/* Pupila que sigue el mouse */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#262627] rounded-full transition-transform duration-200 ease-out"
                  style={{
                    transform: `translate(${(mousePosition.x / window.innerWidth - 0.5) * 20}px, ${(mousePosition.y / window.innerHeight - 0.5) * 10}px)`,
                    boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Texto Central */}
          <div className="flex-1 max-w-2xl text-center px-4 md:px-12 lg:px-20 order-2 md:order-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin font-helvetica text-primaryText mb-4 tracking-wide">
              ABOUT ME
            </h2>
            {/* Espinas en lugar de línea */}
            <div className="mx-auto mb-8 w-40 md:w-48 lg:w-56">
              <img src={thorneImg || "/placeholder.svg"} alt="espinas" className="w-full object-contain" />
            </div>
            <p className="text-base md:text-lg lg:text-xl text-primaryText/90 leading-relaxed font-light">
              Soy un desarrollador web apasionado con más de 2 años de experiencia creando experiencias digitales que combinan tecnología de vanguardia con un diseño intuitivo. Me especializo en React, Node.js y Frameworks modernos de JavaScript, manteniéndome siempre a la vanguardia en este campo en rápida evolución. </p>
          </div>

          {/* Ojo Inferior/Derecho */}
          <div className="relative w-full md:w-1/4 flex justify-center order-3 md:order-3">
            <div className="relative">
              <img
                src={eyeImg || "/placeholder.svg"}
                alt="cyber eye right"
                className="w-64 h-40 md:w-72 md:h-48 lg:w-96 lg:h-64 object-contain"
                style={{ filter: "contrast(1.2) drop-shadow(0 0 10px rgba(189, 153, 119, 0.4))" }}
              />
              {/* Pupila que sigue el mouse */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#262627] rounded-full transition-transform duration-200 ease-out"
                  style={{
                    transform: `translate(${-(mousePosition.x / window.innerWidth - 0.5) * 20}px, ${(mousePosition.y / window.innerHeight - 0.5) * 10}px)`,
                    boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Líneas decorativas */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262627]/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262627]/30 to-transparent" />
    </section>
  );
}