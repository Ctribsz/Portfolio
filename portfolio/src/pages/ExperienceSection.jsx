// src/components/ExperienceSection.jsx
import React from "react";
import corner from "../assets/corner.png";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-8 bg-primaryBg overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-thin font-helvetica text-primaryText text-center mb-16 tracking-wide">
          EXPERIENCE
        </h2>

        <div className="space-y-16">
          {/* Bloque 1 — alineado a la izquierda */}
          <div className="flex justify-start">
            <div className="w-full md:w-1/2 relative">
              {/* Reflejo */}
              <img
                src={corner}
                alt=""
                className="
                  absolute
                  -bottom-12 
                  -left-16
                  w-64
                  h-auto
                  transform translate-y-8 scale-y-[-1]
                  z-10       
                "
              />

              {/* Tarjeta, con z-0 para que quede debajo de la esquina */}
              <div className="bg-primaryBg p-8 rounded-lg relative z-0">
                <h3 className="text-xl font-bold text-primaryText mb-2">
                  Web Developer
                </h3>
                <p className="text-sm font-light text-accent mb-4">
                  UVG-Deportes • 2023–2025 • Remote
                </p>
                <p className="text-primaryText font-light leading-relaxed">
                Como Web Developer lideré el rediseño y la implementación completa de la plataforma UVG-Deportes usando React, Node.js y Tailwind CSS. Reemplacé el sistema manual de registro de torneos por una solución interactiva con actualizaciones en tiempo real, reduciendo el trabajo administrativo un 50 % y aumentando el engagement estudiantil. Colaboré estrechamente con diseñadores y responsables de la universidad para garantizar una interfaz responsiva, accesible y fácil de usar.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 2 — alineado a la derecha */}
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 relative">
              {/* Esquina inferior derecha rotada */}
              <img
                src={corner}
                alt=""
                className="
                  absolute
                  -bottom-20
                  -right-16
                  w-64
                  h-auto
                  transform rotate-180
                  z-10
                "
              />

            <div className="bg-primaryBg p-8 rounded-lg relative z-0 text-right">
                <h3 className="text-xl font-bold text-primaryText mb-2">
                  Full Stack & AI Solutions Engineer
                </h3>
                <p className="text-sm font-light text-accent mb-4">
                    Fluentum • 2025 – 
                </p>
                <p className="text-primaryText font-light leading-relaxed">
                  En Fluentum desarrollo soluciones de inteligencia artificial y chatbots conversacionales para automatizar procesos empresariales. Creo agentes inteligentes en Node.js y Python, entreno modelos de NLP y diseño APIs RESTful para la ingesta y procesamiento de grandes volúmenes de datos. Además, construyo dashboards interactivos en React que permiten visualizar insights de IA en tiempo real.
                </p>
            </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}