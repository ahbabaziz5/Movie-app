import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <h1 className='font-bold'>Netflix Website</h1>
        </div>
        <div className="flex flex-wrap justify-center">
            <div className="mx-4 my-2">
                <h4 className="font-bold">Quick Links</h4>
                <ul className="mt-2">
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/tv-shows">TV Shows</a></li>
                   
                </ul>
            </div>
            <div className="mx-4 my-2">
                <h4 className="font-bold">Contact</h4>
                <p className="mt-2">Email: info@example.com</p>
                <p>Phone: +123 456 7890</p>
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