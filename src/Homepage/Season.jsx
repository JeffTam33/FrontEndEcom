import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Calendar from 'react-calendar'
import '../CssFile/LightMode/Calendar.css'
import '../CssFile/LightMode/Season.css'

const tileDisabled = ({ activeStartDate, date, view }) => {
  return date < new Date()
}

function Season(season) {
  const seasonObj = season.season
  var imageArr = seasonObj.imageArr
  var altArr = seasonObj.altArr

  const [value, onChange] = useState(new Date())
  const [show, setShow] = useState(false)
  
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date()
  }

  function purchase() {
    let item = {
      "name": seasonObj.title,
      "dateBought": new Date(),
      "dateReserve": value,
      "price": 1,
      "quantity": 1,
      "info": {}
    }
    console.log(item)
  }


  //This needs to change when mongodb is added Array in Carousel
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
              setShow(!show)
            }
          }
        >
          {seasonObj.reserve}
        </button>
      </div>
        {
          show?
          <div className='calendar_wrapper'>
            <Calendar onChange={onChange} tileDisabled={tileDisabled} className="calender" />
            <button className='add_to_cart' onClick={() => purchase()}>Add to Cart</button>
          </div>:null
        }
    </div>
  )
}

export default Season;