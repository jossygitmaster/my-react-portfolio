import React from 'react'
import './header.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import {BsTelegram} from  'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
<div className='header__socials'>
    <a href='https://twitter.com/Yosef_k_Hailu' target='_blank'><AiFillTwitterCircle/></a>
    <a href='https://linkedin.com/in/yosef-k-hailu-b2949a264' target='_blank'><AiFillLinkedin/></a>
    <a href='https://www.github.com/jossygitmaster/' target='_blank'><AiFillGithub/></a>
    <a href='https://t.me/Prolific_jossy/' target='_blank'><BsTelegram/></a>
</div>
    )
}

export default HeaderSocials  
