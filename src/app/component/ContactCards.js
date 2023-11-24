import React from 'react'

const ContactCards = () => {
  return (
    <>
    <div className='font-bold text-4xl text-center mt-5 mb-10'><h1>Contact Us</h1></div>
    <div className='flex justify-between'>
   <div className='border-2 w-96 h-60 text-center'>
<div className='font-bold text-xl mb-5'>Email</div>
<div><p>Monday to friday Expected</p>
<p>Response Time 72 hours</p></div>
<div className='mt-5'>Send Email </div>
   </div>

   <div className='border-2 w-96 h-60 text-center '>
<div className='font-bold text-xl mb-5'>Live Chat</div>
<div><p>Weekdays : 9 AM to 6 PM GMT</p>
<p>Weekends : 9 AM to 5 PM GMT</p></div>
<div className='mt-5'>Chat Now</div>
   </div>

   <div className='border-2 w-96 h-60 text-center'>
   <div className='font-bold text-x mb-5'>Community Forum</div>
   <div><p>Monday to friday Expected</p>
<p>Response Time 72 hours</p></div>
<div className='mt-5'>Ask the Community </div>
      </div>
   </div>
   </>
  )
}

export default ContactCards