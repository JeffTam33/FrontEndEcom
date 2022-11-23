import React from 'react'
import '../CssFile/LightMode/Main.css'
import Carousel from 'react-bootstrap/Carousel'
import { useContext } from 'react'

function Main() {
  return (
    <div className='main'>
      <div className='container'>
        <Carousel className='carousel'>
          <Carousel.Item>
            <img className='d-block' src='https://i.imgur.com/2kM1Gm0.jpg' alt='electronics' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src='https://i.imgur.com/6jpmyK5.jpg' alt='gifts' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src='https://i.imgur.com/QfvKcdk.jpg' alt='gifts' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src='https://i.imgur.com/M7iaMFX.jpg' alt='gifts' />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Main