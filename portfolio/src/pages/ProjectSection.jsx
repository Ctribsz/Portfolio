import React from "react";
import ProjectsCoverflow from "../components/Coverflow";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-8 bg-primaryBg">1
      
      <h2 className="text-4xl font-thin font-helvetica text-center mb-16 tracking-wide">
        PROJECTS
      </h2>

      {/* Aquí va tu Coverflow */}
      <ProjectsCoverflow projects={projects} />
    </section>
  );
}