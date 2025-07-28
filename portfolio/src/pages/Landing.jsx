// src/components/Landing.jsx
import React, { useRef, useState } from "react";
import Dither from "../components/Dither";
import portrait from "../assets/portrait-glitch.png";

export default function Landing({ scrollToSection }) {
  const containerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleMenuClick = (targetId) => {
    scrollToSection(targetId);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    "ONLINE",
    "PROJECTS",
    "EXPERIENCE",
    "SKILLS",
    "ABOUT ME",
    "CONTACT ME",
  ];

  return (
    <section
      ref={containerRef}
      id="landing"
      className="relative w-screen h-screen bg-accent overflow-x-hidden overflow-y-visible"
    >
      {/* A) Fondo Dither */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Dither
          waveColor={[0.741, 0.600, 0.467]}
          waveSpeed={0.05}
          waveFrequency={3}
          waveAmplitude={0.3}
          colorNum={5}
          pixelSize={2}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.5}
        />
      </div>

      {/* Botón hamburguesa (sólo móvil) */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 right-4 z-50 md:hidden bg-black/80 backdrop-blur-lg border border-[#BD9977]/30 p-3 rounded-lg"
        style={{ boxShadow: "0 0 20px rgba(189, 153, 119, 0.3)" }}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block w-6 h-0.5 bg-[#BD9977] transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#BD9977] mt-1 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#BD9977] mt-1 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </button>

      {/* Menú móvil overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay oscuro */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Rejilla de opciones */}
          <div className="absolute bottom-8 left-4 right-4">
            <nav
              className="
                bg-gradient-to-b from-black/90 via-[#262627]/95 to-black/90
                backdrop-blur-lg p-4
                border border-[#BD9977]/30
                shadow-2xl rounded-lg
              "
              style={{
                boxShadow:
                  "0 0 30px rgba(189, 153, 119, 0.4), inset 0 0 20px rgba(189, 153, 119, 0.1)",
              }}
            >
              {/* Indicador ONLINE */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-[#BD9977] font-mono">ONLINE</span>
              </div>
              {/* Botones en grid */}
              <div className="grid grid-cols-2 gap-3">
                {menuItems.slice(1).map((item, idx) => {
                  const targetId = item.toLowerCase().replace(" ", "-");
                  return (
                    <button
                      key={item}
                      onClick={() => handleMenuClick(targetId)}
                      className="
                        relative uppercase text-[#EDE4E0] text-xs font-light font-mono
                        tracking-[0.1em] py-3 px-3
                        border border-[#BD9977]/20 hover:border-[#BD9977]/50
                        hover:text-[#BD9977] hover:bg-[#BD9977]/10
                        rounded group text-center transition-all duration-300
                      "
                      style={{ textShadow: "0 0 10px rgba(189, 153, 119, 0.5)" }}
                    >
                      <span className="block text-[10px] text-[#BD9977]/60 font-mono mb-1">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="relative z-10 block">{item}</span>
                    </button>
                  );
                })}
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#BD9977] to-transparent mt-4"/>
            </nav>
          </div>
        </div>
      )}

      {/* B) Capa de contenido */}
      <div className="relative z-20 h-full flex justify-start items-center w-full px-4 sm:px-6 md:px-0 font-eurostile">
        
        {/* 1) Retrato (sólo mitad visible en móvil) */}
        <div className="flex-shrink-0 relative -left-16 sm:-left-20 md:left-0 mr-4 sm:mr-6 md:mr-8 w-36 h-44 sm:w-48 sm:h-64 md:w-64 md:h-80 overflow-hidden">
          <img
            src={portrait}
            alt="Developer Portrait"
            className="object-cover w-full h-full md:-translate-x-1/2 transform"
            style={{
              filter: "contrast(1.2) saturate(1.2)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>

        {/* 2) Nombre + Subtítulo */}
        <div className="relative flex-1 flex flex-col items-start sm:items-center justify-center px-2 sm:px-4">
          {/* Glow pulsátil */}
          <h1
            className="
              absolute top-6 right-6
              md:static
              text-3xl sm:text-4xl
              font-bold font-helvetica uppercase
              text-white opacity-20 animate-pulse
              filter blur-md whitespace-nowrap
            "
          >
            C H R I S T I A N&nbsp;&nbsp;
            <span className="block md:inline">E C H E V E R R I A</span>
          </h1>
          {/* Texto nítido */}
          <h1
            className="
              relative text-3xl sm:text-4xl uppercase text-white
              drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]
              mb-2 whitespace-nowrap
            "
          >
            C H R I S T I A N&nbsp;&nbsp;
            <span className="block md:inline">E C H E V E R R I A</span>
          </h1>
          {/* Subtítulo centrado */}
          <p className="text-xl sm:text-2xl font-light font-mono text-white/90 flex items-center">
            <span className="inline-block animate-pulse mr-2">{">"}</span>
            <span>Frontend Developer</span>
            <span className="inline-block animate-ping ml-2 w-2 h-5 bg-white/80"></span>
          </p>
        </div>

        {/* 3) Menú Cyberpunk – sólo desktop */}
        <div className="hidden md:block flex-shrink-0 relative">
          {/* Circuito de fondo */}
          <div className="absolute -inset-4 opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 200 300">
              <defs>
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0 10h20M10 0v20" stroke="#BD9977" strokeWidth="0.5" opacity="0.5" />
                  <circle cx="10" cy="10" r="1" fill="#BD9977" opacity="0.7" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
              <path
                d="M20 50 L180 50 L180 250 L20 250"
                stroke="#BD9977"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
                className="animate-pulse"
              />
            </svg>
          </div>
          <nav
            className="
              relative flex flex-col items-center space-y-4
              bg-gradient-to-b from-black/80 via-[#262627]/90 to-black/80
              backdrop-blur-lg p-6 mr-4 border border-[#BD9977]/30 shadow-2xl
            "
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              boxShadow:
                "0 0 20px rgba(189,153,119,0.3), inset 0 0 20px rgba(189,153,119,0.1)",
            }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-[#BD9977] font-mono">ONLINE</span>
            </div>
            {menuItems.slice(1).map((item, idx) => {
              const targetId = item.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(targetId)}
                  className="
                    relative w-full uppercase text-[#EDE4E0] text-sm font-light font-mono
                    tracking-[0.15em] py-3 px-4
                    hover:text-[#BD9977] hover:bg-[#BD9977]/10
                    border-l-2 border-transparent hover:border-[#BD9977]
                    group transition-all duration-300
                  "
                  style={{ textShadow: "0 0 10px rgba(189,153,119,0.5)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BD9977]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-xs text-[#BD9977]/60 font-mono">
                    {String(idx + 2).padStart(2, "0")}
                  </span>
                  <span className="relative z-10">{item}</span>
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#BD9977]">
                    →
                  </span>
                </button>
              );
            })}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#BD9977] to-transparent mt-4" />
            <div className="text-xs text-[#BD9977]/60 font-mono mt-2">
              {new Date().toLocaleTimeString("en-US", { hour12: false })}
            </div>
          </nav>
        </div>
      </div>

      {/* C) Fade inferior */}
      <div className="absolute bottom-0 left-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-primaryBg pointer-events-none" />
    </section>
  );
}
