import React from 'react'
import tmm from '../../assets/my graphic design resume.pdf'

const TMM = () => {
  return (
    <div className='tmm'>
      <a href={tmm} download className='btn'>Download my Resume</a>
      <a href='#contact'  className='btn btn-primary'>lets talk</a>
    </div>
  )
}

export default TMM