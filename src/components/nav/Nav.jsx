
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai' 
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri' 
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from "react";
const Nav = () => {
  const [activeNav, activeState] = useState('#')
    return (   
  
 <nav>
<a href="#" onClick={() => activeState('#')} className= {activeNav === '#' ? "active" : ''}><AiOutlineHome/></a>
<a href="#about" onClick={() => activeState('#about')} className= {activeNav === '#about' ? "active" : ''}><AiOutlineUser/></a>
<a href="#experiance" onClick={() => activeState('#experiance')} className= {activeNav === '#experiance' ? "active" : ''}><BiBook/></a>
<a href="#services" onClick={() => activeState('#services')} className= {activeNav === '#services' ? "active" : ''}> <RiServiceLine/></a>
<a href="#contact" onClick={() => activeState('#contact')} className= {activeNav === '#contact' ? "active" : ''}> <BiMessageSquareDetail/></a> 
  </nav>
  )
}

export default Nav  