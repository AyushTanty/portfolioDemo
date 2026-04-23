import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

const App = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbar = document.querySelector('.custom-navbar');

    if (!element) return;

    const offset = navbar ? navbar.offsetHeight : 0;

    const top = element.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />

      <section id="about" className="section"><About /></section>
      <section id="projects" className="section"><Projects /></section>
      <section id="skills" className="section"><Skills /></section>
      <section id="contact" className="section"><Contact /></section>
    </>
  );
};

export default App;