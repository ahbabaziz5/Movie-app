import React from 'react'
import { MdEmail } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { PiChatTeardropTextFill } from "react-icons/pi";
import ContactForm from './ContactForm';
import Head from 'next/head';

const ContactCards = () => {
  return (
    <div className='sm:flex-wrap'>
    <div className='font-bold text-4xl text-center mt-3 mb-6'><h1>Contact <span className='text-red-500'>Us</span></h1></div>
    <div className='flex flex-wrap justify-center'> 
        <div className=' border-2 m-4 sm:w-96 w-full h-60 text-center rounded-md'>
            <div className='flex justify-center pt-2 pb-2'><MdEmail size={40} color='red' /></div>
            <div className='font-bold text-xl mb-5'>Email</div>
            <div><p>Monday to Friday Expected</p>
            <p>Response Time 72 hours</p></div>
            <div className='mt-5'>Send Email </div>
        </div>

        <div className= 'border-2 m-4 sm:w-96 w-full h-60 text-center rounded-md'>
            <div className='flex justify-center pt-2 pb-2'><PiChatTeardropTextFill size={40} color='red' /></div>
            <div className='font-bold text-xl mb-5'>Live Chat</div>
            <div><p>Weekdays: 9 AM to 6 PM GMT</p>
            <p>Weekends: 9 AM to 5 PM GMT</p></div>
            <div className='mt-5'>Chat Now</div>
        </div>

        <div className='border-2 m-4 sm:w-96 w-full h-60 text-center rounded-md'> 
            <div className='flex justify-center pt-2 pb-2'><SiHomeassistantcommunitystore size={40} color='red' /></div>
            <div className='font-bold text-x mb-5'>Community Forum</div>
            <div><p>Monday to Friday Expected</p>
            <p>Response Time 72 hours</p></div>
            <div className='mt-5'>Ask the Community </div>
        </div>
    </div>
    <div className='font-bold text-4xl text-center mt-10 mb-10'><h3>We'd love to hear <span className='text-red-500'>from You</span></h3></div>
    <div className='flex justify-center'><ContactForm/></div>
    <div className='flex justify-center mt-6'> 
        <Head>
            <script
            async
            defer
            src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap"
            type="text/javascript"
            />
        </Head>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89315.89106846825!2d66.94372438570699!3d24.876248433272387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e3d396aaaab%3A0x373c6166314885b4!2sMuhammadi%20Ground!5e0!3m2!1sen!2s!4v1701619978831!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    </div>
</div>)
}

export default ContactCards