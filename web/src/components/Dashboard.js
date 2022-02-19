import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'


function Dashboard() {
  
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
        <Navbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>
  )
}

export default Dashboard