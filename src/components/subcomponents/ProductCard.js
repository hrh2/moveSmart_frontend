import React from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { BsFillPenFill } from 'react-icons/bs';
import image from '../../img/prof.jpg';

export default function ProductCard() {
  return (
      <div className='md:py-3 sm:py-3 p-2 grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 gap-2 text-[.7em] bg-blue-950 text-white rounded-lg'>
          <div className='flex items-center'>
              <img className='w-16 h-16 rounded-2' src={image} alt='' />
          </div>
          <div className='flex flex-col justify-center'>
              <h4 className='font-bold text-center sm:text-left'>Name: <span>Lorem</span></h4>
          </div>
          <div className='flex flex-col justify-center'>
              <h4 className='font-bold text-center sm:text-left'>Details</h4>
              <p className='text-center sm:text-left text-[.7em]'>$ <span>1234</span></p>
              <p className='text-center sm:text-left text-[.7em]'>Status</p>
          </div>
          <div className='flex flex-col justify-center'>
              <h4 className='font-bold text-center sm:text-left'>Requests</h4>
              <a href='/#' className='text-center sm:text-left text-[.7em]'>Pending</a>
              <a href='/#' className='text-center sm:text-left text-[.7em]'>Resolved</a>
          </div>
          <div className='flex items-center justify-center'>
              <span className='bg-blue-700 rounded-full p-2'><BsFillPenFill size={20} /></span>
          </div>
          <div className='flex items-center justify-center'>
              <span className='bg-red-700 rounded-full p-2'><RiDeleteBin2Fill size={20} /></span>
          </div>
      </div>
  )
}
