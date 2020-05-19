import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import AddProject from "./components/AddProject";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <Title name="Annanya Vedala" leadtext="I am a Technology enthusiast"/>
        <About />
        <SkillsSection />
        </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
      <Route exact path="/ProjectSection">
      <ProjectSection />
      </Route>
      <Route exact path="/AddProject" component={AddProject}></Route>
      <Route component={NotFound}/>
      

      
        
      </Switch>
      
      <Footer />
      

      
    </BrowserRouter>
    
  );
}

export default App;
