import React from 'react'
import me from '../../assets/gurdi.png'
import gurdi from '../../assets/gurd.jpg'
import './testimonials.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { Pagination } from "swiper";



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'pagination={true} modules={[Pagination]}>
       <SwiperSlide className='testimonials'>
        <div className='client_avatar'>

        {/* use square photos to get a circled shape and make its css property border-radius 50% */}
          <img src={gurdi} alt='me'/>
          </div>
          <h5 className='client_name'>ernetst achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Velit autem, doloremque debitis reprehenderit quod ullam 
            sed harum veritatis saepe, repudiandae nisi? Consequatur autem 
            necessitatibus beatae tenetur ad earum consectetur commodi.
          </small>
          </SwiperSlide>

        <SwiperSlide className='testimonials'>
        <div className='client_avatar'>
          <img src={me} alt='me'/>

          </div>
          <h5 className='client_name'>ernetst achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Velit autem, doloremque debitis reprehenderit quod ullam 
            sed harum veritatis saepe, repudiandae nisi? Consequatur autem 
            necessitatibus beatae tenetur ad earum consectetur commodi.
          </small>
          </SwiperSlide>

        <SwiperSlide className='testimonials'>
        <div className='client_avatar'>
          <img src={me} alt='me'/>

          </div>
          <h5 className='client_name'>ernetst achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Velit autem, doloremque debitis reprehenderit quod ullam 
            sed harum veritatis saepe, repudiandae nisi? Consequatur autem 
            necessitatibus beatae tenetur ad earum consectetur commodi.
          </small>
         </SwiperSlide>
          </Swiper>
          
    </section>
  )
}

export default Testimonials