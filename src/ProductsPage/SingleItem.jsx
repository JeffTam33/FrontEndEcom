import React from 'react'
import '../CssFile/LightMode/SingleItem.css'

function SingleItem(item) {
  const itemArr = item.item;
  return (
    <div className='item_single'>
      <div className='product_gallery_single'>
        <div className='selected_image_wrapper_single'>
          <img className='selected_image_single' src={itemArr[0][1]} />
        </div>
      </div>
      <div className='product_info_single'>
        <span className='product_title_single'>{itemArr[0][0]}</span>
        <p className='description_single'>{itemArr[0][3]}</p>
        <p className='price_single'>{itemArr[0][2]}</p>
        <button className='add_single'>Add to Cart</button>
      </div>
    </div>
  )
}

export default SingleItem;