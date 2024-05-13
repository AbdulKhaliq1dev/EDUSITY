import React from 'react'
import '../About/About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>

        <div className='about-left'>
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' />
             </div>

        <div className='about-right'> 
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's
            compreshesive education programs. Our cutting-edge curriculum is designed to empower
            students with the khowledge, Skills, and Experiances needed to excel in the dynamic
            field of education.
        </p>
        <p>
            With a focus on innovation, hands on learning, and personalized mentorship, our programs prepare 
            aspiring educators to make a meaningful impact in the classroom , school, and comunities.
        </p>
        <p>
            Wether u aspire to become a teacher, adminstrator, counslor, or educational leader, our diverse
            range of programs offers the perfect pathway to achieve your goals and unlock your full potential in 
            shaping the future of education.
        </p>
        </div>

    </div>
  )
}

export default About