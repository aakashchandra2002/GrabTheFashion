import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = (props) => {
  const {all_products}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className="shop-category-left">
        <h1>FLAT 50% OFF</h1>
        <p>12
        <span class="hr3"> Hours </span> 21 <span class="hr3"> Mins</span>
        </p>
        <button>Explore Now</button>
      </div>
      <div className="shop-category-right">
      <img src={props.banner} alt="" />
      </div>
      
    </div>
  )
}

export default ShopCategory



