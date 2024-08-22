import React from 'react'
import'./Footer.css'
import footer_logo from '../Assest/logo_big.png'
import instagram_icon from '../Assest/instagram_icon.png'
import pintester_icon from '../Assest/pintester_icon.png'
import whatsapp_icon from '../Assest/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footers-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footers-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footers-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footers-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
        </div>
        <div className="copyright">
            <hr/>
            <p>Copyright @ 2023</p>
        </div>
    </div>
  )
}
