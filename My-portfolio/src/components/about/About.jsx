import React from 'react'
import './about.css'
import kirui from '../../assets/vin2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderSymlinkFill} from 'react-icons/bs'

const about = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={kirui} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Nairobi and USA</small>
            </article>
            
            <article className='about__card'>
              <BsFolderSymlinkFill className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p>
            My name is Vincent Kirui, a skilled software engineer and quality assurance professional . I'm passionate about discovering and solving problems in the community through technology.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
