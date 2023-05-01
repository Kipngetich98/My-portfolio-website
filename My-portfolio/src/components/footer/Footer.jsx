import React from 'react'
import './footer.css'
import {FaTwitter} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>Vincent</a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/Vincent85419152"><FaTwitter/></a>

        <a href="https://github.com/Kipngetich98"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vincent Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer
