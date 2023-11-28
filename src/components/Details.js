import React from 'react'
import DetailsCards from './subcomponents/DetailsCards'
export default function Details() {
  return (
      <div className='w-[97%] mx-auto my-2 grid md:grid-cols-3 grid-flow-row gap-4 rounded-lg bg-blue-900 bg-opacity-50  text-white text-[.6em] sm:text-[.9em] md:text-[1.245em]'>
        <div className=' col-span-2 p-1'>
            <h1 className='px-2 py-4'>Explore stations</h1>
            <div className='grid grid-flow-row md:grid-cols-2 gap-4 sm:grid-cols-2'>
                {/* card */}
                <DetailsCards/>
                <DetailsCards/>
                <DetailsCards />
                <DetailsCards/>
            </div>
        </div>
        <div className=' col-span-1 p-2'>
            <h1 className='px-2 py-4'>Last Activities</h1>
              <div className='p-2 rounded-lg grid grid-flow-row gap-2 md:w-full sm:full md:text-[.7em] w-[80vw] text-black bg-white'>
                <p className=''> 23 june 2023  went Kayonza from Nyabugogo</p>
                <p className=''> 23 june 2023  went Kayonza from gahinga</p>
            </div>
        </div>
    </div>
  )
}
