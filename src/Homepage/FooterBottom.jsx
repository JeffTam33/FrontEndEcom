import React from 'react'
import '../CssFile/LightMode/FooterBottom.css'

function FooterBottom() {
  return (
    <div className='footer_bottom'>
      <div className='link_container'>
        <ul className='link_collection'>
          <li className='footer_bottom_title'>Contacts</li>
          <li><a className='link_footer'>Customer Service</a></li>
          <li><a className='link_footer'>Business Partners</a></li>
          <li><a className='link_footer'>Our Staff</a></li>
        </ul>
      </div>
      <div className='link_container'>
        <ul className='link_collection'>
          <li className='footer_bottom_title'>Policys</li>
          <li><a className='link_footer'>Package Handling</a></li>
          <li><a className='link_footer'>Returns and Refunds</a></li>
          <li><a className='link_footer'>Trust and Safety</a></li>
        </ul>
      </div>
      <div className='link_container'>
        <ul className='link_collection'>
          <li className='footer_bottom_title'>Mission</li>
          <li><a className='link_footer'>Charities</a></li>
          <li><a className='link_footer'>Finances</a></li>
          <li><a className='link_footer'>Quality/Report</a></li>
        </ul>
      </div>
      <div className='foot_note'>
        <p className='copyright'>©2022 Jeffrey Tam, Anything you "purchase" here is not processed</p>
      </div>
    </div>
  )
}

export default FooterBottom;