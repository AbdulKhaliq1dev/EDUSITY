import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import Programs from './Componets/Programs/Programs'
import Title from './Componets/Title/Title'
import About from './Componets/About/About'
import Campus from './Componets/Campus/Campus'
import Testimonials from './Componets/Testimonials/Testimonials'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/> 
     <Hero/>
     <div className="container"> 
     <Title subTitle="Our Program" Title="What We Offer"/>
     <Programs/>
     <About/>
     <Title subTitle="Galary" Title="Campus Photos"/>
     <Campus/>
     <Title subTitle="TESTIMONIALS" Title="What Student Says"/>
     <Testimonials/>
     <Title subTitle="Contact Us" Title="Get In Touch"/>
     <Contact/>
     <Footer/>

     </div>
    
    </>
  )
}

export default App
