import React from 'react'
import Image from '../../img/prof.jpg'
import {FaMapMarker} from 'react-icons/fa'

export default function DetailsCards() {
  return (
      <div className='grid grid-cols-2 bg-white rounded-lg md:text-xs sm:text-xs text-black'>
          <span className='bg-cover bg-center rounded-s-lg' style={{ backgroundImage: `url(${Image})` }}></span>
          <div className='p-1'>
              <h2 className=' font-bold'>Kayonza</h2>
              <span className='flex gap-2 py-1 font-semibold'><FaMapMarker /> with 5 destination</span>
              <article className=' text-justify text-[.9em]'>
                  lorem Ips iud element ullamcorper element met nulla fac et just eu arcu element met nulla fac et jus
              </article>
              <a href='/.' className=' text-slate-400'>see more</a>
          </div>
      </div>
  )
}
