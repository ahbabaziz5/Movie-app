"use client"
import React,{useState} from 'react'


const ContactForm = () => {
    const[user,setUser] = useState(
        {
            username:"",
            email:"",
            phone:"",
            message:""

        } )
        function handleChange(e){
          const  name = e.target.name;
          const  value = e.target.value;
          setUser((prevUser)=> ({...prevUser,[name] : value}))

        }


  return (
   <form className='border-2 h-50 w-96  text-md pt-5 pb-5 py-5 px-5 rounded-md'>
<div>
    <label htmlFor='username'>
        Enter your Username  <br />
    <input type='text' name='username' id='username' value={user.username} onChange={handleChange} placeholder='Enter your username' className='border-2 w-80 py-1 mt-2 mb-2'/>
    </label>
</div> 

<div>
    <label htmlFor='email'  className='pb-2'>Email  <br />
    <input type='email' name='email' id='email' value={user.email} onChange={handleChange} placeholder='Enter your email' className='border-2 w-80 py-1 mt-2 mb-2'/>
    </label>
    </div>

<div>
    <label htmlFor='phone' className='mb-2'> Phone Number<br />
    <input type='number' name='phone' id='number' value={user.phone} onChange={handleChange} className='border-2 w-80 py-1 mt-2 mb-2' />
    </label>
</div>

<div>
    <label htmlFor='message' className='mb-2'> Enter your message<br />
    <textarea name='message' id='message' value={user.message} onChange={handleChange} className='border-2 w-80 h-28 py-1 mt-2 mb-2'/>
    </label>
</div>
<button className='border-2 bg-black text-white rounded-2xl w-32 h-9 text-center mt-2 hover:bg-white hover:text-black'>Send Message</button>








   </form>
  )
}

export default ContactForm