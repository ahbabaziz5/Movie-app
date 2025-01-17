"use client"
import { useState } from 'react';
import Link from 'next/link';
import ImageNav from './ImageNav';
import Navlink from './Navlink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 border border-s-violet-50 shadow-md">
      {/* Logo or Image */}
      <ImageNav className="sm:mr-4" />
      
      {/* Hamburger Menu Button */}
      <button 
        className="sm:hidden text-xl" 
        onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`w-full sm:w-auto sm:flex ${isOpen ? 'block' : 'hidden'} sm:block`}>
        <Navlink className="sm:ml-4" />
      </div>
    </div>
  )
}
