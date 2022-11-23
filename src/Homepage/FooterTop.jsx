import React from 'react'
import '../CssFile/LightMode/FooterTop.css'
import { UilTruck, UilUsersAlt, UilCube } from '@iconscout/react-unicons'

function Footer() {

  return (
    <div className='footer'>
      <div className='text_section'>
        <div className='about_company'>
          <UilUsersAlt className='icons_footer' size="46"/>
          <h2 className='info'>About Us</h2>
          <p> &emsp; Welcome to Tailor, a store with unique products and services, perfect gifts to give or to yourself. We source quality over quantity, making sure your purchase is built to last. Of course you are welcome to come back to buy more.</p>
        </div>
        <div className='about_products'>
          <UilCube className='icons_footer' size="46"/>
          <h2 className='info'>Our Products</h2>
          <p> &emsp; Navigate to a unique range of products such as tools, gifts, snacks, or electronics. They are available for a limited time, 1 year of seasonal release. We also provide vacation tips, hotels, events, and more. We also take suggestions through our contact email below.</p>
        </div>
        <div className='about_shipping'>
          <UilTruck className='icons_footer' size="46"/>
          <h2 className='info'>Shipping Info</h2>
          <p> &emsp; Shipping our products to you is free! That’s right! 100% free! Are you ever tired of needing to buy a limit to receive free shipping, or having to pay shipping at checkout? At Tailor, we give free shipping to any purchases.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;