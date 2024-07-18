import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur dolores, enim sed repellendus quos accusamus cupiditate eaque nam adipisci distinctio quisquam alias. Reiciendis optio itaque incidunt quam assumenda obcaecati?</p>
              <div className='icon'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
  
              </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>

            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91 6282980949</li>
                <li>alsaurav2001@gmail.com</li>
              </ul>
                
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 &copy; Foodie.com -All Right Reserved.
        </p>
        
    </div>
  )
}

export default Footer