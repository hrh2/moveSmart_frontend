import React from 'react'
import Stars from './Stars'
import Image from '../../img/prof.jpg'

export default function CarCard() {
  return (
    <a href='/rentCar' className='text-white w-[15rem] h-[20rem] rounded-lg bg-blue-400 bg-opacity-40'>
      <div className=' h-2/3 rounded-t-lg bg-cover bg-center' style={{backgroundImage:`url(${Image})`}}></div>
      <div className='text-[.7em] p-2 px-4'>
        <h1 className='grid grid-cols-2 gap-2 font-extrabold'>Rolls Roys</h1>
        <Stars />
        <p className=' font-extrabold'>$ 200 <span className=' font-extralight text-[.9em] italic'>per day</span></p>
        <p>Location</p>
      </div>
    </a>
  )
}
