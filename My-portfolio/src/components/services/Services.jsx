import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Software Testing</h3>
          </div>

          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Manual testing of web, desktop, and mobile applications.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Test automation using tools such as Selenium, mocha-chai, jest, and Cypress.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Performance testing and load testing.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>API testing.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Defect tracking and management using tools such as Jira and Bugzilla.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Test documentation (including test plans, test cases, test scripts, and test reports)</p>
            </li>
          </ul>
        </article>

        {/* END OF Software Testing */}

        
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating responsive and modern user interfaces using React and TypeScript.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrating frontend with backend APIs using libraries like Axios or Fetch.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing efficient and optimized code for better performance and faster load times.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Testing frontend applications using frameworks like Jest and Enzyme.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing reusable UI components using libraries like Material UI or Bootstrap.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimizing website accessibility and following WCAG guidelines for better user experience for all users..</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing server-side rendering using Next.js or Nuxt.js for better performance and SEO.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className ='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building RESTful APIs using Python-Django or Node.js/Express.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing efficient SQL queries to fetch data from databases like PostgreSQL, MySQL, and SQLite.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Setting up and configuring servers on AWS or other cloud platforms like Azure or Google Cloud Platform.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrating third-party services like payment gateways, email services, and SMS services using APIs.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing database schemas and models using Django ORM or other ORMs like Sequelize for Node.js.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default services
