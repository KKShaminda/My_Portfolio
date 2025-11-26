import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import './App.css'
import Skills from './components/Skills.jsx'

function App() {


  return (
    <>
      <div>
        <Header />
        <Hero />
        <About /> 
        <Skills />
        <Footer/>
      </div>
      
    </>
  )
}

export default App
