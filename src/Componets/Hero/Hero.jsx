import React from 'react'
import '../Hero/Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='Hero container'>
        <div className="Hero-text">
            <h1>We Ensure Better Education For a Better World</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of educatio</p>
            <button className='btn'>Explore more <img src=  {dark_arrow}  alt="" /></button>
        </div>
    </div>
    
  )
}

export default Hero