import React from 'react'
import tmm from '../../assets/MY TMM BTA.pdf'

const TMM = () => {
  return (
    <div className='tmm'>
      <a href={tmm} download className='btn'>Download TMM BTA</a>
      <a href='#contact'  className='btn btn-primary'>lets talk</a>
    </div>
  )
}

export default TMM