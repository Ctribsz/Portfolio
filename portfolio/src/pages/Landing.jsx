// src/pages/Landing.jsx
import React, { useRef } from "react";
import portrait from "../assets/portrait-glitch.png";
import Dither from "../components/Dither";

export default function Landing({ scrollToSection }) {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="landing"
      className="
        relative       /* Para anclar los children absolute */
        h-screen       /* EXACTAMENTE 100vh, sin min-h ni nada */
        bg-accent      /* #BD9977 */
        overflow-hidden/* Evita scroll horizontal/vertical extra */
      "
    >
      {/** 
       * A) Fondo Dither: debe cubrir 100 % ancho y alto del <section> 
       *    y estar en z-0 para que quede detrás.
       */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Dither
          waveColor={[0.741, 0.600, 0.467]}
          waveSpeed={0.05}
          waveFrequency={3}
          waveAmplitude={0.3}
          colorNum={4}
          pixelSize={2}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
        />
      </div>

      {/**
       * B) Contenido por delante: relative z-20 para que siempre quede encima 
       *    y w-full h-full para ocupar exactamente la misma área que el canvas.
       */}
      <div className="relative z-20 w-full h-full flex items-center px-0">
        {/* 1) Columna izquierda: retrato sin padding extra */}
        <div className="w-1/4 flex justify-start">
          <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src={portrait}
              alt="Developer Portrait"
              className="object-cover object-left w-full h-full"
              style={{
                filter: "contrast(1.1) saturate(1.2)",
                clipPath: "polygon(0 0, 60% 0, 60% 100%, 0 100%)"
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#262627]/10 to-transparent bg-repeat-y animate-pulse"
              style={{ backgroundSize: "100% 4px" }}
            />
          </div>
        </div>

        {/* 2) Columna central: nombre y subtítulo, centrados */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-thin font-helvetica text-[#262627] tracking-wide mb-2">
            JANE <span className="font-bold text-[#EDE4E0]">DOE</span>
          </h1>
          <p className="text-2xl text-[#262627]/70 font-light">Web Developer</p>
        </div>

        {/* 3) Columna derecha: menú, sin padding extra */}
        <div className="w-1/4 flex justify-end">
          <nav className="space-y-6 mr-4">
            {["PROJECTS", "EXPERIENCE", "SKILLS", "ABOUT ME", "CONTACT ME"].map((item) => {
              const targetId = item.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(targetId)}
                  className="
                    block
                    text-[#262627]
                    text-lg
                    font-light
                    font-eurostile
                    tracking-[0.15em]
                    hover:text-[#EDE4E0]
                    px-4
                    py-2
                    transition-all
                    duration-300
                    border-l-2
                    border-transparent
                    hover:border-[#EDE4E0]
                  "
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}