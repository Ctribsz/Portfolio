// src/components/ExperienceSection.jsx
import React from "react";
import corner from "../assets/corner.png";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
        py-12 sm:py-16 lg:py-20
        px-4 sm:px-6 md:px-8
        bg-primaryBg
        overflow-x-hidden overflow-y-visible
      "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-thin font-helvetica text-primaryText text-center mb-16 tracking-wide">
          EXPERIENCE
        </h2>

        <div className="space-y-8">
          <div className="flex justify-start">
            <div className="w-full md:w-1/2 relative">
              
              {/* Esquina decorativa */}
              <img
                src={corner}
                alt="Decorative corner"
                className="
                  absolute
                  -bottom-6 md:-bottom-12
                  -left-4 md:-left-16
                  w-48 md:w-64
                  h-auto
                  transform translate-y-8 scale-y-[-1]
                  z-20
                "
              />
              
              {/* Tarjeta de contenido */}
              <div className="bg-primaryBg p-6 sm:p-8 rounded-lg relative z-0 ml-[2rem] md:ml-0">
                <h3 className="text-xl font-bold text-primaryText mb-2">
                  Web Developer
                </h3>
                <p className="text-sm font-light text-accent mb-4">
                  UVG-Deportes • 2024–2025 • Remote
                </p>
                <p className="text-primaryText font-light leading-relaxed">
                  Como Web Developer tuve la tarea de crear una página amigable tanto para los administradores como para los estudiantes, con esto en mente creé una solución que reemplazó el sistema manual que se tenía anteriormente. Actualmente la página está hecha en Wix, pero también estoy liderando la creación de una nueva versión en Node.js, React y TypeScript.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}