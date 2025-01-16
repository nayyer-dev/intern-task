import React from 'react'
import "./know.css"

const Know = () => {
  return (
    <div className='know-box'>
    <div className='know-main'>
        <h1>Subscribe to know more</h1>
        <div className='know-main2'>
        <input className='know-input' type="email" placeholder='Email Address'/>
        <button className='know-btn'>Know More</button>
    </div>
    </div>
    
    </div>
  )
}

export default Know