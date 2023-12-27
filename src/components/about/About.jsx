import React from 'react'
import './about.css'
import ME from '../../assets/aboutpic.jpg' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
return (

<section id="about"> 
<h5>Get To Know</h5> 
<h2>About Me</h2>
<div className="container about_container"> 
 <div className="about__me">
<div className="about__me-image">
   <img src={ME} alt="About-Image" />
</div>
</div>

<div className="about__content"> 
<div className="about__cards"> 
<article className='about__card'> 
<FaAward className='about__icon'/>
<h5>Experience</h5>
<small>3+ Years Working</small> 
</article>

<article className='about__card'>
<FiUsers className='about__icon' />
<h5>Clients</h5>
<small>200+ Worldwide</small> 
</article>

<article className='about__card'> 
<VscFolderLibrary className='about__icon'/> 
<h5>Projects</h5>
<small>80+ Completed</small>
</article>

<article className='about__card'> 
<FaAward className='about__icon'/> 
<h5>Contributions</h5>
<small>70+ Opensource and Charity</small>
</article>
</div>
<p>
 once said, "The biggest adventure you can take is to live the life of your dreams". 
One day I saw in my dreams of being a successful Author so wise, appreciated, and sought-after
 by society, in my early childhood I used to daydream about contributing Infographics for the NatGeo magazine
  (the wonders of my childhood) while flipping through the pages of NatGeo Megazine I stumbled on in MYC library
   (youth center in my hometown) this influenced my interest in mixing science with visual communication. During those days I dreamed of my family, friends from school, and acquaintances
    being proud of me (I felt it). Is it too much to dream? :) 
    <p></p>
I woke up amidst that dream at 4 in the morning and jotted them down in my notebook. 
I grip those exciting dreams firmly. After that blissful moment, I sustained waking 
up at 4 AM every day to my Miracle Morning(Thanks to Harl Elrod) and painting my dreams
 to glow on the canvas of reality that hung on the bars of faith, with the ink of wisdom
  and a brush of discipline. Praise be to God, I am on the right path toward being the Majestic Me.
  <p></p>
I am sailing on the vast ocean of Literature and Art, traveling the world hunting for the treasure of wisdom and the marvels of beauty.
</p>
<a href='#contact' className='btn btn-primary'>Let's talk</a>
</div>
</div>
</section>

)
}
export default About
