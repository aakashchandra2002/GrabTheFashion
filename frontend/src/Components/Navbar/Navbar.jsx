import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import cart_icon from '../Assets/cart_icon.png'
import wishlist from '../Assets/wishlist.png'
import profile from '../Assets/profile.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} width={80} height={80} alt=""/>
            <p> GrabTheFashion </p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} width={50} height={50} alt=""/></Link>    
                <div className="nav-cart-count">3</div>
                

        </div>
    </div>
  )
}

export default Navbar
