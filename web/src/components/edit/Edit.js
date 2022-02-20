import React from "react";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import EditAbout from "./EditAbout";
import { useState, useEffect } from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';


export default function Edit() {
  return (
    // <div>Edit</div>
    <Redirect to='/edit/about'/>
    
  );
}
