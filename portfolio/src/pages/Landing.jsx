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
        relative
        w-screen
        h-screen
        bg-accent
        overflow-hidden
      "
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

      {/* B) Capa de contenido - MODIFICADO */}
      <div className="relative z-20 h-full flex justify-between items-center w-full px-0 font-eurostile">
        {/* 1) Contenedor del Retrato - MODIFICADO */}
        <div className="flex-shrink-0 justify-s">
          <div className="w-104 h-120 overflow-hidden ml-0">
            <img
              src={portrait}
              alt="Developer Portrait"
              className="object-cover w-128 h-full -translate-x-1/2 transform"
              style={{
                filter: "contrast(1.2) saturate(1.2)",
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              }}
            />
          </div>
        </div>

        {/* 2) Sección del nombre con glow blanco */}
        <div className="relative w-full h-full flex flex-col items-center justify-center px-0">
          {/** 1) Glow pulsátil (blanco difuso) */}
          <h1
            className="
              absolute
              text-4xl
              font-bold
              font-helvetica
              uppercase
              text-white
              opacity-20
              animate-pulse
            "
            style={{
              filter: "blur(6px)",
              whiteSpace: "nowrap",
            }}
          >
            C H R I S T I A N&nbsp;&nbsp;E C H E V E R R I A
          </h1>

          {/** 2) Texto principal (blanco puro + drop-shadow) */}
          <h1
            className="
              relative
              text-4xl
              uppercase
              text-white
              drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]
              mb-2
            "
            style={{
              whiteSpace: "nowrap",
            }}
          >
            C H R I S T I A N&nbsp;&nbsp;E C H E V E R R I A
          </h1>

          {/** 3) Subtítulo con cursor animado */}
          <p className="text-2xl font-light font-mono text-white/90 flex items-center">
            <span className="inline-block animate-pulse mr-2">{">"}</span>
            <span>Frontend Developer</span>
            <span className="inline-block animate-ping ml-2 w-2 h-5 bg-white/80"></span>
          </p>
        </div>

        {/* 3) Menú estilo cyberpunk futurista */}
        <div className="flex-shrink-0 relative">
        {/* Efecto de circuito en el fondo */}
        <div className="absolute -inset-4 opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 200 300">
            <defs>
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10h20M10 0v20" stroke="#BD9977" strokeWidth="0.5" opacity="0.5" />
                <circle cx="10" cy="10" r="1" fill="#BD9977" opacity="0.7" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
            
            {/* Líneas de conexión animadas */}
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
        
        <nav className="
            relative
            flex 
            flex-col 
            items-center 
            space-y-4 
            bg-gradient-to-b 
            from-black/80 
            via-[#262627]/90 
            to-black/80
            backdrop-blur-lg 
            p-6 
            mr-4
            border
            border-[#BD9977]/30
            shadow-2xl
        "
        style={{
            clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
            boxShadow: "0 0 20px rgba(189, 153, 119, 0.3), inset 0 0 20px rgba(189, 153, 119, 0.1)"
        }}>
            
            {/* Indicador de estado */}
            <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-[#BD9977] font-mono">ONLINE</span>
            </div>
            
            {["PROJECTS", "EXPERIENCE", "SKILLS", "ABOUT ME", "CONTACT ME"].map((item, index) => {
            const targetId = item.toLowerCase().replace(" ", "-");
            return (
                <div key={item} className="relative w-full group">
                {/* Línea de conexión lateral */}
                <div className="absolute -left-3 top-1/2 w-2 h-px bg-[#BD9977]/50 group-hover:bg-[#BD9977] transition-colors duration-300"></div>
                
                <button
                    onClick={() => scrollToSection(targetId)}
                    className="
                    relative
                    w-full
                    uppercase
                    text-[#EDE4E0]
                    text-sm
                    font-light
                    font-mono
                    tracking-[0.15em]
                    py-3
                    px-4
                    transition-all
                    duration-300
                    hover:text-[#BD9977]
                    hover:bg-[#BD9977]/10
                    border-l-2
                    border-transparent
                    hover:border-[#BD9977]
                    group
                    "
                    style={{
                    textShadow: "0 0 10px rgba(189, 153, 119, 0.5)"
                    }}
                >
                    {/* Efecto de hover con líneas */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BD9977]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Número de índice */}
                    <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-xs text-[#BD9977]/60 font-mono">
                    {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    {/* Texto del menú */}
                    <span className="relative z-10">{item}</span>
                    
                    {/* Indicador de flecha */}
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#BD9977]">
                    →
                    </span>
                </button>
                </div>
            );
            })}
            
            {/* Barra de progreso decorativa */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#BD9977] to-transparent mt-4"></div>
            
            {/* Timestamp futurista */}
            <div className="text-xs text-[#BD9977]/60 font-mono mt-2">
            {new Date().toLocaleTimeString('en-US', { hour12: false })}
            </div>
        </nav>
        </div>
      </div>

        
      <div
        className="
          absolute
          bottom-0 left-0 inset-x-0
          h-32
          bg-gradient-to-b
          from-transparent
          to-primaryBg
          pointer-events-none
        "
      />
    </section>
  );
}