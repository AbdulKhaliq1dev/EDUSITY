import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import Menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {
  const [sticky, setSticky]= useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      window.scrollY>50? setSticky(true): setSticky(false);   
    })
  },[]);
  
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu=() =>{
         mobileMenu? setMobileMenu(false): setMobileMenu (true);
    }
  
  return ( 

  <nav className={`container ${sticky?'dark-nav': ''  } `} >
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
            <li><a href='#hero'>Home</a></li>
            <li><a href='#programs' >Program</a></li>
            <li><a href='#about' >About us</a></li>
            <li><a href='#campus'>Campus</a></li>
            <li><a href='#testimonials'>Testomonials</a></li>
            <li><a href='#contact' className='btn'>Contact us</a></li>
        </ul>
        <img src={Menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar