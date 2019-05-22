import React from 'react';
import Navigation from "./Navigation";
import Header from "./Header";
import About from "./about";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import './App.css';

function App() {
  return (
    <div>
      <Navigation logoTitle="Rizky Portofolio" />

      <Header title="Rizky Kurniawan" />
      <About />
      <Experience />
      <Project />

      <Contact />
    </div>
  );
}

export default App;
