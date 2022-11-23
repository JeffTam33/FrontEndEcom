import React from 'react'
import '../CssFile/LightMode/Thumbnail.css'
function Thumbnail({name, image}) {
  return (
    <div className='thumbnail'>
      <img
        className='image'
        src={image}
        alt={name}
      />
    </div>
  )
}

export default Thumbnail;