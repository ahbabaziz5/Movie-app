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
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.861201490728!2d67.05871387529788!3d24.902715643565674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1cf5b96bf7%3A0x127e07e2a63ed513!2zSmFtaWEgTWVtb24gTWFzamlkIEJ
 hbnR2YSBOYWdhciAo2YXbjNmF2YYg2YXYs9is2K8g2KjYp9mG2bnZiNinINmG2q_YsSk!5e0
 !3m2!1sen!2s!4v1701530166592!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>





  
   
   
   
   
   
   </>
  )
}

export default ContactCards