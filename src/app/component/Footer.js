import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-black py-8">
    <div className="container mx-auto flex flex-col ">
        {/* <div className="mb-4">
          <h1 className='font-bold'>Netflix Website</h1>
        </div> */}
        <div className="flex justify-around">
            
            <div className="mx-4 my-2">
                <h3 className='font-bold text-2xl pb-5'> Netflix</h3>
                <h4 className="font-bold">Contact</h4>
                <p className="mt-2">Email: info@example.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="mx-4 my-2">
                <h4 className="font-bold">Quick Links</h4>
                {/* <ul className="mt-2">
                  <Link href="/"><li><a>Home</a></li></Link> 
                    <li><a href="/Movie">Movies</a></li>
                    <li><a href="/">TV Shows</a></li>
                    <li><a href="/Contact">Contact</a></li>
                   
                </ul> */}
                <ul className="mt-2">
  <li>
    <Link href="/">Home</Link>
  </li>
  <li>
    <Link href="/Movie">Movies</Link>
  </li>
  <li>
    <Link href="/">TV Shows</Link>
  </li>
  <li>
    <Link href="/Contact">Contact</Link>
  </li>
</ul>

            </div>
          
        </div>
        <div className="mt-6 text-center">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer