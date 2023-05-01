import React from 'react'
import './Whatsappicon.css'
import { BsWhatsapp } from 'react-icons/bs'

const Whatsappicon = () => {
  return (
    <div className='whatsapp_icon'>
      <a href="https://wa.me/+254799476072"  target="_blank" rel='noreferrer'>
        <BsWhatsapp /> 
        </a>
        
    </div>
  )
}

export default Whatsappicon;