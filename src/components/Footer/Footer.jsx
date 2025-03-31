import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Explore a comprehensive selection of essential medicines, 
              curated with the utmost quality and care. 
              Our mission is to meet your healthcare needs and enhance your well-being, 
              one trusted product at a time.
        </p>
        <div className="footer-social-icons">
            <a href="https://github.com/Premkumar981/Bhavani-Medicals-and-General-Store" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="GitHub Repo" /></a>
            <a href="https://x.com/premkumarsuru" target="_blank" rel="noopener noreferrer">
            <img src={assets.twitter_icon} alt="Twitter Profile" /></a>
            <a href="https://www.linkedin.com/in/surupremkumar/" target="_blank" rel="noopener noreferrer">
            <img src={assets.linkedin_icon} alt="LinkedIn Profile" /></a>
        </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contact Us</h2>
            <ul>
            <li>9959408946</li>
            <li>Contact: SriBhavani-Medicals.onrender.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 &#169; SriBhavaniMedicals.onrender.com. All Rights Reserved</p>
    </div>
  )
}

export default Footer
