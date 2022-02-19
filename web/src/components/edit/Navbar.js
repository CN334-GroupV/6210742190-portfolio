import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-800 md:sticky top-0 z-10" >
          {/* <h2 className="mr-5 hover:text-white">Edit page</h2> */}
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/edit/about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="/edit/projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="/edit/skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="/edit/contact" className="mr-5 hover:text-white">
            Contact
          </a>
          
      </div>
    </header>
  )
}

export default Navbar