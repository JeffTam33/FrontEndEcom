import React, { useState } from 'react'
import '../CssFile/LightMode/SingleItem.css'
import '../CssFile/LightMode/Items.css'

function ItemPage(item) {

  const [count, setCount] = useState(0)
  const [imageGal, setImageGal] = useState(1)
  const [add, setAdd] = useState(1)

  function addCart(){
    setAdd(add + 1);
    document.getElementById("cart_num_items").innerHTML = add;
  }

  const itemObj = item.item;
  console.log(itemObj)
  return (
    <div className='item'>
      <div className='product_gallery'>
        <div className='list_image'>
          <ul>
            <li>
              <img src={itemObj.images[0] }/>
            </li>
            {
              console.log(itemObj.images[0])
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ItemPage