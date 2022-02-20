import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-800 md:sticky top-0 z-10" >

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">

          <a href="/edit/about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="/edit/projects" className="mr-5 hover:text-white">
            Project
          </a>
          <a href="/edit/skills" className="mr-5 hover:text-white">
            Skill
          </a>
          
          <a href="/edit/contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
        <a href="/" className="mr-5 hover:text-white">
            Dashboard
          </a>
      </div>
      
    </header>
  )
}

export default Navbar