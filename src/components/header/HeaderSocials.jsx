import React from 'react'
import './header.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
<div className='header__socials'>
    <a href='https://www.github.com/' target='_blank'><AiFillGithub/></a>
    <a href='linkedin.com/in/yosef-k-hailu-b2949a264' target='_blank'><AiFillLinkedin/></a>
    <a href='https://www.facebook.com/' target='_blank'><AiFillFacebook/></a>
<div className=''></div>
</div>
    )
}

export default HeaderSocials  