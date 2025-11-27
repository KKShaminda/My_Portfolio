import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import './App.css'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {


  return (
    <>
      <div>
        <Header />
        <Hero />
        <About /> 
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
        <ScrollToTop />
      </div>
      
    </>
  )
}

export default App
