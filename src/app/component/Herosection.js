import React from 'react'
import Button from './Button'
import Image from 'next/image'
const Herosection = ({title}) => {
  return (
    <div className='border-2 w-full h-96  flex justify-between items-center bg-red-600' style={{height: 600}}>
<div className=' h-auto w-1/2 font-serif  ml-32'>
<h1 className='font-bold text-4xl pb-10 text-bold row-2'>{title}</h1>
<p className='pb-8 text-lg'> It is a long established fact that a reader will be distracted by the logic and understand

</p>
<Button/>

</div>
<div className=' h-auto w-1/2 font-serif  ml-32'>

<Image src='/netfl.png' alt='logo pic' width={300} height={300} className="ml-16 mt-1 mb-2"/>



</div>
{/* <div className="custom-shape-divider-bottom-1700851651">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div> */}
    </div>
  )
}

export default Herosection