import React from 'react'
import backendCreateAccound from '../'
import '../CssFile/LightMode/CreateAccountPage.css'

function CreateAccountPage() {

  function createAccount() {

    checkPassword()
    console.log("1111")

    let newUser = {
      "name": document.getElementById('name').value,
      "email": document.getElementById('email').value,
      "password": 0
    }
  }

  function checkEmail() {
    let emailSub = document.getElementById('email').value
    return true 
  }

  function checkPassword() {
    let passwordSub = document.getElementById('password').value
    return true
  }

  return (
    <div className='create_account_page'>
      <div className='section_create'>
        <div className='create_name'>
          <label className='create_name_label'>Name</label>
          <input id='name' className='create_name_input' name="name" required/>
        </div>
        <div className='create_email'>
          <label className='create_email_label'>Email</label>
          <input id='email' className='create_email_input' name="email" required/>
        </div>
        <div className='create_password'>
          <label className='create_password_label'>Password</label>
          <input id='password' className='create_password_input' type='password' name="password" required/>
        </div>
        <button className='register_button' onClick={() => createAccount()}>Register</button>
        <div className='rules_container'>
          <h5 className='rule_title'>Passwords must be:</h5>
          <ul>
            <li className='rule' id="character_rule">Has at least 8 characters long</li>
            <li className='rule' id="uppercase_rule">Has at least 1 uppercase letter</li>
            <li className='rule' id="lowercase_rule">Has at least 1 lowercase letter</li>
            <li className='rule' id="digit_rule">Has at least 1 digit</li>
            <li className='rule' id="special_rule">Has at least 1 special character</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountPage;