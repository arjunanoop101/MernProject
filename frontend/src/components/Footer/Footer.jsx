import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <h2 className='logo'>Healthify </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam officia illum doloremque placeat, praesentium repellat omnis, harum, quia quae ullam iusto blanditiis modi consequuntur?</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+91-*590985254</li>
                <li>arjunanoop101@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'> Copyright 2024  - All rights reserved</p>
    </div>
  )
}

export default Footer
