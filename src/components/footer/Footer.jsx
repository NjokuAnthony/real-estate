import React from 'react'

import './footer.css'
import { FaFacebook, FaInstagram, FaTelegram, FaPrinterest, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socials'>
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaFacebook className='icon' />
            <FaTelegram className='icon' />
            {/* <FaPrinterest className='icon' /> */}
        </div>
        <div className="container">
            <div className="col">
                <h3>About</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About</p>
            </div>
            <div className="col">
                <h3>Contact</h3>
                <p>Telephone</p>
                <p>E-mail</p>
                <p>Hotlines</p>
                <p>Whatsapp</p>
            </div>
            <div className="col">
                <h3>Address</h3>
                <p>Location</p>
                <p>Meeting/Appointment</p>
                <p>marketer</p>
                <p>Agents</p>
            </div>
            <div className="col">
                <h3>Inquiry</h3>
                <p>FAQ</p>
                <p>Complains</p>
                <p>Order</p>
                <p>Customer service</p>
            </div>
        </div>

    </div>
  )
}

export default Footer