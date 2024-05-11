import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo1.png'
import instagram_icon from '../Assets/instagram.png'
import facebook_icon from '../Assets/facebook.png'
import whatsapp_icon from '../Assets/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} width={80} height={80} alt="" />
        <p>GrabTheFashion</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} width={50} height={50} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={facebook_icon} width={50} height={50} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} width={50} height={50} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
