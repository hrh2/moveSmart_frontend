import React from 'react'
import {Box} from '@mui/material'

export default function Commentform() {
  return (
      <form className='md:text-base w-full sm:text-sm text-xs md:mt-0 mt-24 bg-slate-300 bg-opacity-30 py-2 '>
        <h2 className='w-5/6 text-right border-r-4 py-2 px-2  mx-auto'>Any Comment?</h2>
        <div className='mx-auto flex'>
            <textarea type="text" name = "comment" placeholder=' '  className='mx-auto p-1 md:w-3/5 sm:w-4/5 w-5/6 py-2 md:h-[4rem] sm:h-[2.5rem] bg-white border-0 rounded-xl text-black'></textarea>
        </div>
    </form>
  )
}
