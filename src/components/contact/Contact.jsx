import React from 'react'
import './contact.css'
import {HiOutlineMail} from  'react-icons/hi'
import {BsTelegram} from  'react-icons/bs'
import {SiUpwork} from  'react-icons/si'
import {BsWhatsapp} from  'react-icons/bs'
import { useRef } from 'react';
import emailjs from  'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ueqtgma', 'template_2cihdv8', form.current, 'jdP4wMIWzt6j7BD3C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className='container  contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact-option-icon'/>
            <h4> Email</h4>
            <h5>yosefkhailu@gmail.com</h5>
            <a href='mailto:yosefkhailu@gmail.com'>send a message</a>
          </article>

          <article className='contact_option'>
            <BsTelegram className='contact-option-icon'/>
            <h4>Telegram</h4>
            <h5>reaach to me on telegram</h5>
            <a href='https://t.me/Prolific_jossy'>send a message</a>
          </article>

          <article className='contact_option'>
            <SiUpwork className='contact-option-icon'/>
            <h4> Upwork</h4>
            <h5>get me on Upwork</h5>
            <a href='mailto:yosefkhailu@gmail.com'>send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact-option-icon'/>
            <h4> Whatsapp</h4>
            <h5>get me on whatsapp</h5>
            <a href='mailto:yosefkhailu@gmail.com'>send a message</a>
          </article>

        </div>
        {/* end of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='your full name' required/>
          <input type='email' name='email' placeholder='your email' required/>
          <textarea name='message' rows={7} placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>send mesage</button>            
        </form>
      </div>
    </section>
  ) 
}

export default Contact