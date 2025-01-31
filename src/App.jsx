import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Project from './components/Project/Project'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <About/>
    <Project/>
    <Mywork/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
