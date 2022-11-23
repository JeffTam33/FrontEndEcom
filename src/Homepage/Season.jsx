import React, { useState } from 'react'
import '../CssFile/LightMode/Season.css'

import Carousel from 'react-bootstrap/Carousel'
import Calendar from 'react-calendar'
import '../CssFile/LightMode/Calendar.css'

const tileDisabled = ({ activeStartDate, date, view }) => {
  return date < new Date()
}

function Season(season) {
  const seasonObj = season.season
  var imageArr = seasonObj.imageArr
  var altArr = seasonObj.altArr
  const [value, onChange] = useState(new Date())
  const [show,setShow] = useState(false)
  function revealDate () {
    console.log(value)
  }

  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date()
  }
  
  return (
    <div className='season'>
      <div className='carousel_container'>
        <Carousel className='carousel' fade={true}>
            {Array(imageArr.length)
              .fill(0)
              .map((x, i) => (
                <Carousel.Item>
                  <img src={imageArr[i]} alt={altArr[i]} />
                </Carousel.Item>
              ))
            }
        </Carousel>
      </div>
      <div className='season_info'>
        <p className='title'>{seasonObj.title}</p>
        <p className='subtitle'>{seasonObj.subtitle}</p>
        <p className='details'>{seasonObj.details}</p>
        <button className='reserve' onClick={()=>{
              setShow(!show);
              
            }
          }
        >
          {seasonObj.reserve}
        </button>
      </div>
        {
          show?
          <div className='calendar_wrapper'>
            <Calendar tileDisabled={tileDisabled} className="calender" onClickDay={revealDate()} />
          </div>:null
        }
    </div>
  )
}

export default Season;