"use client"
import { useState } from 'react';
import Link from 'next/link';
import ImageNav from './ImageNav';
import Navlink from './Navlink';
import "./style.css"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 border border-s-violet-50 shadow-md mainNav">
  {/* Logo or Image */}
  <ImageNav className="main sm:mr-4 flex-shrink-0" />
  
  <button 
  className="text-xl bars ml-auto sm:ml-0" 
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? "x" : "☰"}
</button>

  {
    isOpen ? 
    <div className="sm:flex navlinks flex-shrink-0">
    <Navlink className="sm:ml-4" />
  </div> : " "
  }
  
</div>

  )
}
