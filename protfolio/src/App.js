import React from 'react'
import "./App.css"
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Home from './components/Home/Home'
import Qualification from './components/Qualification/Qualification'
import Testimonials from './components/Testimonials/Testimonials'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Testimonials/>
      <Work/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App