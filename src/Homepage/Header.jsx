import React from 'react'
import { useState } from 'react'
import '../CssFile/LightMode/Header.css'
import { GiShoppingCart } from 'react-icons/gi'
import { MdAccountCircle, MdOutlineSearch } from 'react-icons/Md'
import { BsHeart } from 'react-icons/Bs'
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
            <MdOutlineSearch className='search_icon' size="46"/>
          </Link>
        </div>
        <Link to={'/cart'}>
          <div className='cart'>
            <GiShoppingCart className='icon' size="30px"/>
            <span className='icon_text' id='cart_num_items'>{0}</span>
          </div>
        </Link>
        {
          localStorage.name === undefined &&
          <Link to={'/login'}>
            <div className='account'>
              <MdAccountCircle className='icon' size="30px"/>
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
            <BsHeart className='icon' size="30px"/>
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