import React from 'react'
import  "./footer.css";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className="footer-info">
        <div className="footer-left">
            <img src={logo} alt="" />
        </div>
        <div className="footer-right">
        <div className="footer-center">
        <a href="">Help</a>
            <label htmlFor="language">Language:<select name="language" id="laguage"> <option value="English">English</option></select></label>
            
        </div>
            <div className="footer-company">
                <h1>Company</h1>
                <div className='company-terms'>
                <a href="">Terms and Conditions</a>
                <a href="">Privacy Policy</a>
                </div>
                
            </div>
            <div className="footer-company">
                <h1>Contact Us</h1>
                <div className='company-terms'>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
                </div>
                
            </div>
        </div>
        </div>
        
        
        <div className="footer-border">
        
        </div>

    </div>
  )
}

export default Footer