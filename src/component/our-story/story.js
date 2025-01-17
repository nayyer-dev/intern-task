import React from 'react'
import "./story.css"

const Story = () => {
  return (
    <div className='story-main'>
      <h1 className='story-heading'>Our Story.</h1>
      <p className='story-discrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br /> culpa qui officia deserunt mollit anim id est laborum.</p>
      <button className='story-btn'>Know More</button>
    </div>
  )
}

export default Story