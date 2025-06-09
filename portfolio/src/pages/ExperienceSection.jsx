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
                  Senior Frontend Developer
                </h3>
                <p className="text-sm font-light text-accent mb-4">
                  TechCorp Inc. • 2022–2024 • Remote
                </p>
                <p className="text-primaryText font-light leading-relaxed">
                  Led development of responsive web applications with React and
                  Next.js. Collaborated closely with design teams to build
                  pixel-perfect UI components, optimized performance (40% faster
                  load times) and mentored junior engineers.
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
                    Full Stack Developer
                </h3>
                <p className="text-sm font-light text-accent mb-4">
                    StartupXYZ • 2020–2022 • San Francisco
                </p>
                <p className="text-primaryText font-light leading-relaxed">
                    Designed and built MERN-stack applications, crafted RESTful APIs and database schemas, and integrated third-party services and payment systems. Participated in agile workflows and drove code reviews.
                </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}