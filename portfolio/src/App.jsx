import React from "react";
import Landing from "./pages/Landing";

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

    </div>
  );
}

export default App;