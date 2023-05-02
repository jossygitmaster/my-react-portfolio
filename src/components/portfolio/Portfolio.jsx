import React from 'react'
import './portfolio.css'
import image0 from '../../assets/burger.jpg'
import image1 from '../../assets/pro1.png'
import image2 from '../../assets/enat1.png'

import image3 from '../../assets/ቻው ገርነት.jpg'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>my  recent work</h5>
      <h2>portfolio</h2>

      <div className='container portfolio__container'>
    
      <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image3} alt=''/> 
          </div>
          <h3> this is my first book translation project. 
            translated from english version titled "No More Mr. Nice Guy" 
            by Dr. Robert Glover</h3>
          <div className= 'portfolio-item-cta'>
          <a href='wwww.upwork.com/me' className='btn' target='_blank'>upwork</a>
          <a href='www.facebook.com/me' className='btn btn-primary' target='_blank'>facebook</a>
          </div>

        </article>      <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image0} alt=''/> 
          </div>
          <h3>my favorite burger ad, this was developed for a client in US.</h3>
          <div className= 'portfolio-item-cta'>
          <a href='wwww.upwork.com/me' className='btn' target='_blank'>upwork</a>
          <a href='www.facebook.com/me' className='btn btn-primary' target='_blank'>facebook</a>
          </div>

        </article>      
        
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image1} alt=''/> 
          </div>
          <h3>check the banner i developed for worship
             night in an Evangelican church in US </h3>
          <div className= 'portfolio-item-cta'>
          <a href='wwww.upwork.com/me' className='btn' target='_blank'>upwork</a>
          <a href='www.facebook.com/me' className='btn btn-primary' target='_blank'>facebook</a>
          </div>

        </article>      
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={image2} alt=''/> 
          </div>
          <h3>Enat Bakery i am their loyal customer for years. 
            i make this banner to show my gratitude and they make it there walpaper
            along in there main shop in Melbourne, Australia.
          </h3>
          <div className= 'portfolio-item-cta'>
          <a href='wwww.upwork.com/me' className='btn' target='_blank'>upwork</a>
          <a href='www.facebook.com/me' className='btn btn-primary' target='_blank'>facebook</a>
          </div>

        </article>
            
        </div>

    </section>
  )
}

export default portfolio