import React from 'react'
import { MdEmail } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { PiChatTeardropTextFill } from "react-icons/pi";
import ContactForm from './ContactForm';

const ContactCards = () => {
  return (
    <>
    <div className='font-bold text-4xl text-center mt-3 mb-6'><h1>Contact Us</h1></div>
    <div className='flex justify-around'>
   <div className='border-2 w-96 h-60 text-center rounded-md'>
      <div className='flex justify-center pt-2 pb-2'><MdEmail size={40} color='red' /></div>
<div className='font-bold text-xl mb-5'>Email</div>
<div><p>Monday to friday Expected</p>
<p>Response Time 72 hours</p></div>
<div className='mt-5'>Send Email </div>
   </div>

   <div className='border-2 w-96 h-60 text-center rounded-md'>
   <div className='flex justify-center pt-2 pb-2'><PiChatTeardropTextFill size={40} color='red' /></div>
<div className='font-bold text-xl mb-5'>Live Chat</div>
<div><p>Weekdays : 9 AM to 6 PM GMT</p>
<p>Weekends : 9 AM to 5 PM GMT</p></div>
<div className='mt-5'>Chat Now</div>
   </div>

   <div className='border-2 w-96 h-60 text-center rounded-md'>
   <div className='flex justify-center pt-2 pb-2'><SiHomeassistantcommunitystore size={40} color='red' /></div>
   <div className='font-bold text-x mb-5'>Community Forum</div>
   <div><p>Monday to friday Expected</p>
<p>Response Time 72 hours</p></div>
<div className='mt-5'>Ask the Community </div>
      </div>
   </div>
   <div className='font-bold text-4xl text-center mt-3 mb-6'><h3>We'd love to hear <span className='text-red-500'>from You</span></h3></div>
 <div className='flex justify-center '><ContactForm/></div>





  
   
   
   
   
   
   </>
  )
}

export default ContactCards