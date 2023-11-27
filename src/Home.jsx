import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'
import home from "./image/news_logo.png"
const Home = () => {
  return (
    <>
        <Common name="Grow your business with" visit="/about" btname="Get Started"
          imgsrc={home} />
    </>
  )
}

export default Home
