import React from 'react'
import { useState } from 'react'
import '../CssFile/LightMode/Header.css'
import { UilShoppingCart, UilUser, UilSearch, UilHeart } from '@iconscout/react-unicons'
import { Link } from "react-router-dom"

function Header() {
  const [count, setCount] = useState(0);

  function changeMode(){
    console.log(document.getElementsByClassName("app")[0].id)
    if(document.getElementsByClassName("app")[0].id === "light"){
      document.getElementById("light").setAttribute("id", "dark")
    }else if(document.getElementsByClassName("app")[0].id === "dark"){
      document.getElementById("dark").setAttribute("id", "light")
    }
  }

  return (
    <div className='header'>
      <div className='header_bar'>
        <Link to={'/'}>
          <img
            className='logo'
            src='https://i.imgur.com/fHzZb0Q.png'
            alt='Tailor logo'
          />
        </Link>
        <div className='search_box'>
          <input className='search_box_text' type="text" placeholder="Search..." size="20wv" />
          <Link to={'/'}>
            <UilSearch className='search_icon' size="30"/>
          </Link>
        </div>
        <Link to={'/cart'}>
          <div className='cart'>
            <UilShoppingCart className='icon' size="30px"/>
            <span className='icon_text' id='cart_num_items'>{0}</span>
          </div>
        </Link>
        {
          localStorage.name === undefined &&
          <Link to={'/login'}>
            <div className='account'>
              <UilUser className='icon' size="30px"/>
              <span className='icon_text'>Sign In</span>
            </div>
          </Link>
        }

        {
          localStorage.name &&
          <Link to={'/account'}>
            <div className='account'>
              <img src={localStorage.picture} className="account_pfp" />
              <span className='icon_text'>{localStorage.given_name}</span>
            </div>
          </Link>
        }

        <Link to={'/favorites'}>
          <div className='favorites'>
            <UilHeart className='icon' size="30px"/>
          </div>
        </Link>
        <label className="switch">
          <input id="mode" type="checkbox" onClick={changeMode}/>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  )
}

export default Header;