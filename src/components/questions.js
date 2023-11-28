import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function Questions() {
  return (
       <div className='w-5/6 mx-auto'>
      <h1 className='border-l-4 px-1 md:text-sm sm:text-xs text-[.6em] font-extrabold'>Frequently asked questions(FAQs)</h1>
            <p className='p-1 flex gap-2 md:text-xs sm:text-[.7em] text-[.55em]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste magnam laborum dolorum vitae <span><BsFillArrowRightCircleFill size="2em" /></span></p>
            <p className='p-1 flex gap-2 md:text-xs sm:text-[.7em] text-[.55em]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste magnam laborum dolorum vitae <span><BsFillArrowRightCircleFill size="2em" /></span></p>
            <p className='p-1 flex gap-2 md:text-xs sm:text-[.7em] text-[.55em]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste magnam laborum dolorum vitae <span><BsFillArrowRightCircleFill size="2em" /></span></p>
      </div>
  )
}
