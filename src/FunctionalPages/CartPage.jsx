import React from 'react'
import { useState } from 'react'
import '../CssFile/LightMode/CartPage.css'

function CartPage() {
  const [total, setTotal] = useState(0)
  let dropdown = document.querySelector('.dropdown')

  function show(anything) {
    document.querySelector(".textbox").value = anything
    console.log(anything)
  }

  return (
    <div className='cart_page'>
      <div className='user_cart'>
      <h3 className='cart_titles'>Your Cart</h3>
        <div className='cart_grid'>
          <img className='item_cart' />
          <h5 className='item_cart_name'>Item name</h5>
          <h8 className='item_description'>Description</h8>
          <div className='dropdown' onClick={() => {
            dropdown = document.querySelector('.dropdown');
            dropdown.classList.toggle('active');
            }}>
            <input type={"text"} className="textbox"
            placeholder='1' readonly="readonly" />
            <div className='option'>
              <div onClick={() => show("1")}>1</div>
              <div onClick={() => show("2")}>2</div>
              <div onClick={() => show("3")}>3</div>
              <div onClick={() => show("4")}>4</div>
              <div onClick={() => show("5")}>5</div>
            </div>
          </div>
          <button className='remove_button' onClick={() => removeItem()}>Remove</button>
        </div> 
      </div>
      <div className='cart_total'>
        <h3 className='cart_titles'>Total: {total}</h3>
      </div>
    </div>
  )
}

export default CartPage;