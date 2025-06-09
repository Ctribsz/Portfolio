import React from "react";
import Landing from "./pages/Landing";
import ProjectsSection from "./pages/ProjectSection";
import ExperienceSection from "./pages/ExperienceSection";
import AboutMe from "./pages/AboutmeSection";
import Skills from "./pages/SkillsSection";
import Contact from "./pages/ContactSection";

function App() {
  const scrollToSection = (sectionId) => {
    const elemento = document.getElementById(sectionId);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Landing scrollToSection={scrollToSection} />
      <ProjectsSection />
      <ExperienceSection />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;