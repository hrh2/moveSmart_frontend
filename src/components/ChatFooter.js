import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BsInstagram, BsTwitter } from 'react-icons/bs';
export default function Footer() {
  return (
      <div className='md:w-5/6 sm:w-5/6 md:px-0 sm:px-0 w-full mx-auto px-6'>
          <h1 className='border-l-4 px-1 md:text-sm sm:text-xs text-[.6em] font-extrabold'>Reach out to us via our PlatForms</h1>
          <div className='w-full items-center text-center fw-bold py-3 grid md:grid-cols-3 grid-flow-col gap-2 md:text-base sm:text-sm text-[.6em]'>
              <div className=''>
                  <a href='-' className='flex gap-2 text-decoration-none'><MdEmail size={20} /> movesmart@gmail.com</a>
              </div>
              <div className=''>
                  <a href='-' className='flex gap-2 text-decoration-none'><BsTwitter size={20} />moveSmart_Rwanda</a>
              </div>
              <div className=''>
                  <a href='-' className='flex gap-2 text-decoration-none'><BsInstagram size={20} />move_smart</a>
              </div>
          </div>
      </div>
  )
}
