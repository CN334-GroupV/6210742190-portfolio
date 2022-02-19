import React from 'react'
import About from './About'
import Contract from './Contract'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'


function Dashboard() {
  return (
    <div>
        <Navbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Contract/>
    </div>
  )
}

export default Dashboard