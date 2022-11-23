import React from 'react'
import '../CssFile/LightMode/Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
      <div className='nav_bar'>
        <Link to='/tools'>
          <button className='nav_item'>
            Tools
          </button>
        </Link>
        <Link to='/gifts'>
          <button className='nav_item'>
            Gifts
          </button>
        </Link>
        <Link to='/snacks'>
          <button className='nav_item'>
            Snacks
          </button>
        </Link>
        <Link to='/electronics'>
          <button className='nav_item'>
          Electronics
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Nav;