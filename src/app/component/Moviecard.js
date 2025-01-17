import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function Moviecard(currenEle) {
  const { id, type, title, synopsis } = currenEle.jawSummary;
  return (
   

  <div className='card-container border-2 h-96 w-64 mb-2 rounded-2xl text-center pb-2'>
  <div className='image-wrapper'>
    <Image 
      src={currenEle.jawSummary.backgroundImage.url} 
      width={400} 
      height={500} 
      className='rounded-2xl object-cover h-40 w-full' 
    />
  </div>
  <div className='content-wrapper pt-5'>
    <h1 className='text-2xl font-bold pt-2 text-ellipsis'>{title}</h1>
    <p className='line-clamp-2 text-sm px-2'>
      {synopsis}
    </p>
  </div>
  <Link href={`/Movie/${id}`}>
    <button className='border-2 bg-black text-white rounded-2xl w-32 h-9 text-center mt-2 hover:bg-white hover:text-black'>
      Read more
    </button>
  </Link>
</div>


    

  )
}

