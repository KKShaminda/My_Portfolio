import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import './App.css'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

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
      </div>
      
    </>
  )
}

export default App
