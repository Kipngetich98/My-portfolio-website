import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_43c61ai', 'template_n1g1izq', form.current, '74YgDN8pHL6Qx8Qtm')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred while sending the message. Please try again later.');
      });

    e.target.reset();

    const params = {
      to_name: 'Your Name',
      from_name: form.current.elements.name.value,
      from_email: form.current.elements.email.value,
      message: form.current.elements.message.value,
      your_name: 'Your Name'
    };

    emailjs.send('service_43c61ai', 'template_n1g1izq', params, '74YgDN8pHL6Qx8Qtm')
      .then((response) => {
        console.log('Email sent successfully', response);
      })
      .catch((error) => {
        console.log('Email failed to send', error);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className=" contact__option">
            <FaTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@Vincent85419152</h5>
            <a href="https://twitter.com/Vincent85419152" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          
          <article className=" contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Mail me</h5>
            <a href="mailto:kiruivinie1@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          
          <article className=" contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+254799476072</h5>
            <a href="https://wa.me/+254799476072" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} method="post">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder ='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
