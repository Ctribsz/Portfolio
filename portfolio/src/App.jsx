import React from "react";
import Landing from "./pages/Landing";
import ProjectsSection from "./pages/ProjectSection";
import ExperienceSection from "./pages/ExperienceSection";

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
    </div>
  );
}

export default App;