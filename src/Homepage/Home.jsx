import React from 'react'
import Bubble from './Bubble'
import '../CssFile/LightMode/Home.css'
import { Link } from "react-router-dom"

const bubbleItems =[
  ["Winter", "https://i.imgur.com/QaSUzFD.jpg"],
  ["Spring", "https://i.imgur.com/q3oHHiT.jpg"],
  ["Summer", "https://i.imgur.com/OOG7Z3c.jpg"],
  ["Fall", "https://i.imgur.com/tEAqys1.jpg"]
]

function Home() {
  return (
    <div className='home'>
      <div className='bubble_section'>
        <Link to={'/' + bubbleItems[0][0]}>
          <Bubble
            name={bubbleItems[0][0]}
            image={bubbleItems[0][1]}
          />
        </Link>
        <Link to={'/' + bubbleItems[1][0]}>
          <Bubble
            name={bubbleItems[1][0]}
            image={bubbleItems[1][1]}
          />
        </Link>
        <Link to={'/' + bubbleItems[2][0]}>
          <Bubble
            name={bubbleItems[2][0]}
            image={bubbleItems[2][1]}
          />
        </Link>
        <Link to={'/' + bubbleItems[3][0]}>
          <Bubble
            name={bubbleItems[3][0]}
            image={bubbleItems[3][1]}
          />
        </Link>
      </div>
      <div>
        <div>
          <h2 className='season_title'>Seasonal Services</h2>
        </div>
      </div>
    </div>
  )
}

export default Home