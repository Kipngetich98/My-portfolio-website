import React from 'react'
import './header.css'
import CTA from './CTA'
import kirui from '../../assets/kirui.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>Vincent Kirui</h1>
          <h5 className="text-light"> Software /Test/Machine learning Engineer</h5>
          <CTA />
          <HeaderSocials/>

          <div className="me">
            <img src={kirui} alt="mee" />
          </div>

          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default header
