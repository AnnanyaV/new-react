import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div>
      <Navbar/>
      <Title />
      <About />
      <SkillsSection />
      <ProjectSection />
      <Footer />

      </div>
  );
}

export default App;
