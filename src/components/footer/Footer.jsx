import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Paweł Zarębski</a>

      <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
          <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/' target='_blank'><FaFacebook /></a>
        <a href='https://www.instagram.com/' target='_blank'><FaInstagram /></a>
        <a href='https://twitter.com/' target='_blank'><FaTwitter /></a>
      </div>

      <div className="footer__copyrights">
        <small>@copy; Paweł Zarębski. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer