// src/components/ProjectsCoverflow.jsx
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// estilos de Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function ProjectsCoverflow({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto py-16 space-y-12">
      {/* === Coverflow Slider === */}
      <div className="relative">
        {/* Prev */}
        <button
          className="
            absolute left-4 top-1/2 -translate-y-1/2 z-20
            p-3 bg-accent/20 hover:bg-accent/40
            text-accent hover:text-white
            rounded-full transition
            swiper-button-prev
          "
        >
          <ChevronLeft size={30} />
        </button>

        <Swiper
          onSwiper={(sw) => (swiperRef.current = sw)}
          onSlideChange={(sw) => setActiveIndex(sw.activeIndex)}
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="w-full py-8"
        >
          {projects.map((p) => (
            <SwiperSlide
              key={p.id}
              style={{ width: "200px" }}
              className="
                bg-primaryBg rounded-xl overflow-hidden
                hover:shadow-[0_0_30px_rgba(189,153,119,0.5)]
                transition-shadow
              "
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-45 object-cover"
              />
              <div className="p-4 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                <h3 className="text-xl font-semibold text-white">
                  {p.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next */}
        <button
          className="
            absolute right-4 top-1/2 -translate-y-1/2 z-20
            p-3 bg-accent/20 hover:bg-accent/40
            text-accent hover:text-white
            rounded-full transition
            swiper-button-next
          "
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* === Detalles del proyecto activo === */}
      {projects[activeIndex] && (
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* 1) Imagen grande */}
          <div className="md:w-1/2 w-full bg-primaryBg rounded-lg overflow-hidden shadow-lg">
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 2) Título, características y descripción */}
          <div className="md:w-1/2 w-full space-y-4">
            <h2 className="text-3xl font-bold text-primaryText">
              {projects[activeIndex].title}
            </h2>

            <ul className="list-disc list-inside text-primaryText space-y-1">
              {projects[activeIndex].tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <p className="text-base text-primaryText/80">
              {projects[activeIndex].description}
            </p>
          </div>
        </div>
      )}

      {/* BOTÓN DE DEMO */}
      <a
        href={projects[activeIndex].demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-5 py-2 bg-accent text-white font-medium rounded-lg shadow hover:bg-accent/80 transition"
      >
        Ver Demo
      </a>
    </div>
  );
}