import React from 'react'
import me from '../../assets/gurdi.png'
import bryan from '../../assets/BRYAN.PNG'
import natgeo from '../../assets/natgeo.jpg'
import girl from '../../assets/girl.jpg'

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
          <img src={natgeo} alt='natgeo'/>
          </div>
          <h5 className='client_name'>National Geographic Society</h5>
          <small className='client_review'>
          Dear Yosef K.Hailu,

I am writing to express my sincere gratitude for your support of the National Geographic Society. 
Your generous contribution has enabled us to continue our mission 
of inspiring people to care about the planet and its inhabitants. 

          The work we do at the National Geographic Society would not be possible without the support of people like you.
           We are honored to have you as a member of our community, and we look forward to continuing our partnership in the years ahead.
           Thank you again for your support and dedication to our shared mission.

Sincerely,  Dr. Jill Tiefenthaler

CEO @National Geographic Society
          </small>
          </SwiperSlide>

        <SwiperSlide className='testimonials'>
        <div className='client_avatar'>
          <img src={bryan} alt='me'/>

          </div>
          <h5 className='client_name'>Bryan Christie</h5>
          <small className='client_review'>
          you possess a unique and valuable skill set that has the power to transform the way we communicate and interact with the world around us. 
          Your ability to blend creativity with technical expertise, and to create visually stunning 
          designs that convey complex messages and ideas, is truly impressive
          </small>
          </SwiperSlide>

        <SwiperSlide className='testimonials'>
        <div className='client_avatar'>
          <img src={girl} alt='me'/>

          </div>
          <h5 className='client_name'>Mesa Schumacher</h5>
          <small className='client_review'>
          what truly sets you apart as a graphic designer is your passion for your craft. Your commitment to excellence,
           your attention to detail, and your willingness to push the boundaries of what's
            possible are a testament to your dedication to your work and your clients.
          </small>
         </SwiperSlide>
          </Swiper>
          
    </section>
  )
}

export default Testimonials