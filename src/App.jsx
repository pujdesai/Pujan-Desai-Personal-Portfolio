import React from 'react';
import InitialAnimation from './components/Initial';
import Background from './components/Background';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <InitialAnimation />
      <Background />
      <NavBar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
