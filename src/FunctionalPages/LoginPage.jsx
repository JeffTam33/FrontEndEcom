import React from 'react'
import { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"
import '../CssFile/LightMode/LoginPage.css'

function LoginPage() {
  const [ user, setUser ] = useState({})
  const navigate = useNavigate()

  function accountSaveGoogle(userObject) {
    localStorage.setItem("name", userObject.name)
    localStorage.setItem("email", userObject.email)
    localStorage.setItem("family_name", userObject.family_name)
    localStorage.setItem("given_name", userObject.given_name)
    localStorage.setItem("name", userObject.name)
    localStorage.setItem("picture", userObject.picture)
    console.log(localStorage.picture)
  }

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential)
    setUser(userObject)
    document.getElementById("signInWithGoogle").hidden = true
    accountSaveGoogle(userObject)
    navigate("/")
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "249673988599-3ggdmsqfqth75207a0nevvnui7s3ag82.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInWithGoogle"),
      { theme: "outline", size: "large" }
    )

    google.accounts.id.prompt()
  }, [])

  function handleSignOut(event) {
    setUser({})
    document.getElementById("signInWithGoogle").hidden = false
    localStorage.clear()
  }

  return (
    <div className='login_page'>
      <div className='section'>
        <h3 className='sign_in_title'>Sign in</h3>
        <h5 className='email_address'>Email Address</h5>
        <div className='user_input'>
          <input id="username" type="email" />
        </div>
        <h5 className='password_title'>Password</h5>
        <div className='user_input'>
          <input id="password" type="password" />
        </div>
        <br/>
        <button className='login_account_button'>Login</button>
        <button id='signInWithGoogle' />
        {
          Object.keys(user).length != 0 &&
          <button className='login_account_button' onClick={(e) => handleSignOut(e)}>Sign Out</button>
        }
        <br/>
        <span className='login_description'>Don't have an account?</span>
        <br/>
        <button onClick={() => navigate("/create")} className='create_account_button'>Create an account</button>
      </div>
    </div>
  )
}

export default LoginPage;