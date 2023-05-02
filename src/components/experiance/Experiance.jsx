import React from 'react'
import './experiance.css'
import { BsStarFill } from 'react-icons/bs';
const Experiance = () => {
  return (
    <section id='experiance'>
                  <h5>my skills</h5>
                  <h2>my experiance</h2>
        <div className='container experiance__container'>
          {/* WRITING EXPERIANCE */}

          <div className='experiance_frontend'>
            <h3>Writer</h3>
            <div className='experiance_content'>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon' />
                <div>
                <h4>Published Author</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon' />
               <div>
               <h4>Book Translation</h4>
               <small className='text-light'>Experianced</small>
               </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon' />
                <div>
                <h4>Megazine Columens</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
                <div>
                <h4>English - Amharic Translation</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
                <div>
                <h4>English - Tigrinya Translation</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
                <div>
                <h4>Bloger</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>

            </div> 
          </div>          

          <div className='experiance_frontend'>
            <h3>Graphics Designer</h3>
            <div className='experiance_content'>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon' />
                <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon' />
               <div>
               <h4>Ilustrator</h4>
               <small className='text-light'>Experianced</small>
               </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon' />
                <div>
                <h4>inDesign</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
                <div>
                <h4>Infographics</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
                <div>
                <h4>Premier</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
                <div>
                <h4>After Effects</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>

            </div> 
          </div> 
         <div className='experiance_backend'>
          <h3>Developer</h3>
          <div className='experiance_content'>
          <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
                <div>
                <h4>UI/UX</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
               <div>
               <h4>Android</h4>
                <small className='text-light'>Experianced</small>
               </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon'/>
                <div>
                <h4>Database</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon' />
                <div>
                <h4>PYTHON</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>              
              
              <article className='experiance_details'>
                <BsStarFill className = 'expriance_details-icon' />
                <div>
                <h4>Flutter</h4>
                <small className='text-light'>Experianced</small>
                </div>
              </article>
              
          </div>
        </div>
        </div>

    </section>
  )
}

export default Experiance