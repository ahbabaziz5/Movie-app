import React from 'react'
import Moviecard from '../component/Moviecard';

export default  async function Movie(){
  const url = process.env.SECRET_URL;


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '76dbb9f42bmshdbac6ff90673153p15df0ejsnc2abf0d91731',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  }

const res = await fetch(url,options);
const data = await res.json();
const main_data = data.titles
console.log(data);

  return (
    <>
    
    <div className='text-2xl font-bold text-center'>
      <h1 className='text-4xl pb-20 mt-10'>SERIES & MOVIES</h1></div>
    <div className=" h-auto w-full grid gap-2 grid-cols-4 place-items-center">
    {
main_data.map((currenEle)=>{
return <Moviecard  key={currenEle.id} {...currenEle}/>
})

    }
    </div>
</>
  )
}

