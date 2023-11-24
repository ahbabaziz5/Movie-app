import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
   <Link href={'/Movie'}> 
    <div className='border-1 bg-black text-white rounded-2xl w-32 h-9 text-center pt-1 hover:bg-white hover:text-black '>
        Explore more</div></Link>
  )
}

export default Button