import React from 'react'
import Image from 'next/image';
const page = async({params}) => {
  const id = params.id;
const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;



  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '76dbb9f42bmshdbac6ff90673153p15df0ejsnc2abf0d91731',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  }

const res = await fetch(url,options);
const data = await res.json();
const main_data = data[0].details;
  return (
    <div className='w-full mb-20 md:h-96'>
    <div className='text-center font-bold text-4xl mt-10'>
        Netflix / <span className='text-red-500 '>{main_data.type}</span>
    </div>
    <div className='mt-10 md:mt-20 mx-auto md:mx-0 md:ml-20 mb-5 max-w-screen-lg'>
        <Image src={main_data.backgroundImage.url} width={500} height={500} className='mx-auto md:float-left md:mr-5 mb-5 md:mb-0' />
        <div className='text-center md:text-left'>
            <div className='mt-5'>
                <h1 className='font-bold text-2xl'>{main_data.title}</h1>
                <p className='mt-2'>{main_data.synopsis}</p>
            </div>
        </div>
    </div>
</div>

  )
}

export default page