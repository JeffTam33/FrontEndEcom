import React from 'react'
import '../CssFile/LightMode/Bubble.css'

function Bubble({name, image}) {
  return (
    <div className='bubble'>
      <img
        className='img'
        src={image}
        alt={name}
      />
      <div className='label_overlay'>
        <div className='label'>
          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default Bubble;