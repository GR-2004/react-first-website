import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'
import about from "./image/about.png"
const About = () => {
  return (
    <>
       <Common name='Welcome to About Page' imgsrc={about} visit='/contact' btname='Contact now'/>
    </>
  )
}

export default About
