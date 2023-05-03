import React from 'react'
import './header.css'
import TMM from './TMM'
import me from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
   <header >
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Yosef K.Hailu</h1>
      <h3 className='text-light'>Prolific Writer</h3>
      <h4 className='text-light'>Graphic Designer<br></br></h4>
      <h5 className='text-light'>Developer</h5>
      <TMM/>
      <div className='me'>
                <img src={me} alt='me'/>
        </div>
         <a href="#contact" className='scroll__down'>Scroll Down</a>
        

        <HeaderSocials/>
    </div>
   </header>
    ) 
}

export default header