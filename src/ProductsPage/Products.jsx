import React from 'react'
import '../CssFile/LightMode/Products.css'
import Thumbnail from './Thumbnail'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <div className='products'>
      <div className='products_wrapper'>
        <Link to={'/tools/wrench'}>
          <Thumbnail name={"Wrench"} image={"https://i.imgur.com/kKFVXpd.jpg"} />
        </Link>
        <Link to={'/gifts/book'}>
          <Thumbnail name={"Book"} image={"https://i.imgur.com/j1aBdna.jpg"} />
        </Link>
        <Link to={'/snacks/nuts'}>
          <Thumbnail name={"Nuts"} image={"https://i.imgur.com/DI0jacz.jpg"} />
        </Link>
        <Link to={'/electronics/keyboards'}>
          <Thumbnail name={"Keyboards"} image={"https://i.imgur.com/Kl4VXNz.jpg"} />
        </Link>
      </div>
    </div>
  )
}

export default Products;