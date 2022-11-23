import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../CssFile/LightMode/LoginPage.css'

function AccountPage() {
  const [ user, setUser ] = useState({})
  const navigate = useNavigate()
  function handleSignOut(event) {
    setUser({})
    localStorage.clear()
    navigate("/login")
  }
  return (
    <div className='account_page'>
      <div className='section'>
        <img className='account_page_pfp' src={localStorage.picture} />
        <h4 className='user_name'>Welcome {localStorage.name}</h4>
        <h6 className='email_name'>Email: {localStorage.email}</h6>
        {
          localStorage.name != null &&
          <button className='logout_account_button' onClick={(e) => handleSignOut(e)}>Sign Out</button>
        }
      </div>
    </div>
  )
}

export default AccountPage;