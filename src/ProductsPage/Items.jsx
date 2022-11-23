import React, { useState } from 'react'
import '../CssFile/LightMode/Items.css'

function Items(item) {
  const itemArr = item.item
  const [count, setCount] = useState(0)
  const [imageGal, setImageGal] = useState(1)
  const [add, setAdd] = useState(1)

  function addCart(){
    setAdd(add + 1)
    document.getElementById("cart_num_items").innerHTML = add
  }

  return (
    <div className='item'>
      <div className='product_gallery'>
        <div className='list_image'>
          <ul>
            {Array(itemArr.length)
              .fill(0)
              .map((x, i) => (
                <li><img onClick={() => setImageGal(i + 1)} className='image_gallery' src={itemArr[count][i + 1]}/></li>
              ))
            }
          </ul>
        </div>
        <div className='selected_image_wrapper'>
          <img className='selected_image' src={itemArr[count][imageGal]} />
        </div>
      </div>
      <div className='product_info'>
        <span className='product_title'>{itemArr[count][0]}</span>
        <p className='description'>{itemArr[count][6]}</p>
        <p className='price'>{itemArr[count][5]}</p>
        {Array(itemArr.length)
          .fill(0)
          .map((x, i) => (
            <img onClick={() => setCount(i)} className='option_color' src={itemArr[i][4]} id={"option" + x} />
          ))
        }
        <button className='add' onClick={() => addCart()}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Items;