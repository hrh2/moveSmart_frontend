import React from 'react';
import profile from '../img/prof.jpg';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';


export default function profile_discription() {
  return (
    <div className=' bg-transparent'>
      <div className='h-72'>
        
      </div>
      <div className='relative container border-t-4 border-white rounded-tr-[5em]'>
      <img src={profile} className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-48 w-32 aspect-square rounded-full' alt='Profile' />
        <span>Average rating</span>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 md:w-5/6 mx-auto mt-4">
          <p className='md:py-4 sm:py-3  col-start-1 bg-blue-900 rounded-xl text-white flex gap-2 items-center justify-center'>
            <FaUser size={17} className='text-yellow-400' /><span className='text-[.7em]'>User Name</span>
          </p>
          <p className='md:py-4 sm:py-3 py-2 bg-blue-900 col-start-3 rounded-xl text-white flex gap-2 items-center justify-center'>
            <FaPhoneAlt size={17} className='text-yellow-400' />
            <span className='text-[.7em]'>User Phone</span>
          </p>
          <p className='py-2 sm:py-3 md:py-4 col-start-2 bg-blue-900 rounded-xl text-white flex gap-3 items-center justify-center'>
            <MdOutlineAlternateEmail size={17} className='text-yellow-400 ' /><span className='text-[.7em]'>Email</span>
          </p>
        </div>
      </div>
    </div>
  );
}
