import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Education />
         <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App