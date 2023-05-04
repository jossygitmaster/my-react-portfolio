import React from 'react'
import './footer.css'
import {HiOutlineMail} from  'react-icons/hi'
import {BsTelegram} from  'react-icons/bs'
import {SiUpwork} from  'react-icons/si'
import {BsWhatsapp} from  'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai';
const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Jossy</a>
      <ul className='permalinks'>
      <li> <a href='#'>Home</a></li>
      <li> <a href='#about'>About</a></li>
      <li> <a href='#experiance'>Experiance</a></li>
      <li> <a href='#services'>Services</a></li>
      <li> <a href='#portfolio'>Portfolio</a></li>
      <li> <a href='#testimonials'>Testimonials</a></li>
      <li> <a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href='https://t.me/Prolific_jossy' target='_blank'><BsTelegram/></a>
      <a href='https://www.upwork.com/freelancers/~018a449a94ab7c8718' target='_blank'><SiUpwork/></a>
      <a href='https://www.linkedin.com/in/yosef-k-hailu-b2949a264/' target='_blank'><AiFillLinkedin/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Konjo PLC. All rights reserved.</small>
      </div>
    </footer>
    ) 
}

export default footer