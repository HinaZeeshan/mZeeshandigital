import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import TechBanner from './components/TechBanner';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <TechBanner />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
}
