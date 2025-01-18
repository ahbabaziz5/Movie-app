import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Herosection = ({title}) => {
  
  return (
    <div className='w-full md:h-96 flex flex-col md:flex-row justify-between items-center bg-white' style={{ minHeight: 600 }}>
    <div className='mainsHero h-auto md:w-1/2  md:ml-32 md:mr-4 text-center md:text-left'>
        <h1 className='font-bold text-4xl pb-6 md:pb-10 text-bold row-2'>{title}</h1>
        <p className='pb-4 md:pb-8 text-lg'>
            It is a long established fact that a reader will be distracted by the logic and understand
        </p>
        <Button/>
    </div>
    <div className='h-auto md:w-1/2  md:ml-32'>
        <Image src='/netfl.png' alt='logo pic' width={300} height={300} className="mx-auto md:ml-16 mt-1 mb-2" />
    </div>
    
   
</div>

  )
}

export default Herosection