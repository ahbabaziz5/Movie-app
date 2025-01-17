import Link from 'next/link'
import React from 'react'

const Navlink = () => {
  return (
    <div className='flex justify-between gap-8 mr-16  bg-white '>
    <div>
        <Link href={'./'} className='hover:text-red-500'>Home</Link>
    </div>
    <div>
        <Link href={'/About'} className='hover:text-red-500'>About</Link>
    </div>

    <div>
        <Link href={"/Movie"} className='hover:text-red-500'>Movie</Link>
    </div>

    <div>
        <Link href={"/Contact"} className='hover:text-red-500'>Contact</Link>
    </div>



    </div>
  )
}

export default Navlink