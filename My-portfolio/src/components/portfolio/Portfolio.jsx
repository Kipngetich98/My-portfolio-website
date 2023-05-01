import React from 'react'
import './portfolio.css'
import KI from '../../assets/vin2.jpg'
import PM from '../../assets/propertyImage.png'
import OL from '../../assets/leave.png'
import DE from '../../assets/dataengproj.png'
import WS from '../../assets/scraped.jpg'
import CS  from '../../assets/creditscoring.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PM} alt="" />
          </div>
            <h3>Property/Real Estate Management System</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Kipngetich98/property-real-estate-management" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={OL} alt="" />
          </div>
            <h3>Online Leave Management System</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Kipngetich98/Leave-management-system" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={DE} alt="" />
          </div>
            <h3>Data Engineering project</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Kipngetich98/consumer-finance-csv-data-engineering" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={WS} alt="" />
          </div>
            <h3>Web scraping with Selenium and python</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Kipngetich98/webscraping-selenium" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CS} alt="" />
          </div>
            <h3>Credit scoring model</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Kipngetich98/RandomForestClassifier" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={KI} alt="" />
          </div>
            <h3>Coming soon</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Kipngetich98" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio
