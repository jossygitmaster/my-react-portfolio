import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {/* graphix desinger */}
        <article className='service'>
   {/* graphix designer */}       
          <div className='service__head'>
          
          <h3 className=''>Writing</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>ቻው! ገርነት amharic self help book</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ህይወትና ልምድ amharic version of Atomic Habits by James Clear</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fortitude my autobiography</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>የማለዳ በረከቶች amharic version of The Miracle Morning by Harl Elrod</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>የሰው ተፈጥሮ ሕጎች Amharic version of The Laws of Human Nature by Robert Grene.</p>
            </li>
          </ul>
        </article>
        {/* ui desinger */}
        <article className='service'>
   {/* graphix designer */}       
          <div className='service__head'>
          
           <h3 className=''>Graphic Design</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Infographics: Gold level contributer NatGeo megazine </p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo Designer: winner of the LogoMania contest 2021 </p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Owner and founder @ Konjo PLC printing organization</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Creator: Jos vlogs and Walya prod @Youtube</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Freelance Video maker for events</p>
            </li>
          </ul>
        </article>
          {/* content createor */}
        <article className='service'>
   {/* graphix designer */}       
          <div className='service__head'>
          
           <h3 className=''>Developer</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Fullstack Developer</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React developer</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Android Developer</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Flutter Developer</p>
            </li>            
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ASP.NET Developer </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services