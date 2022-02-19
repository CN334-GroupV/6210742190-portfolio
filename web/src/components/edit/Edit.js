import React from 'react'
import Navbar from './Navbar'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import EditAbout from './EditAbout'
import { useState, useEffect} from 'react'

export default function Edit() {
  return (
    // <div>Edit</div>
    <Redirect to='/edit/about'/>
  )
}
