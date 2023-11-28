import React from 'react'
export default function CarDetails({name,plate,bland,company}) {
  return (
    <>
          <h1 className='border-l-4 px-2 font-bold my-2 md:text-base sm:text-sm text-xs w-5/6 mx-auto'>CAR's DESCRIPTION</h1>
          <div className='md:w-9/12 mx-auto md:text-base sm:text-sm text-xs grid md:grid-flow-row sm:grid-cols-4 grid-cols-2 gap-2 my-2'>
              <h2 className='font-bold'>Name: <span className='text-[80%] font-light italic'>{name}</span></h2>
              <h2 className='font-bold'>Brand: <span className='text-[80%] font-light italic'>{bland}</span></h2>
              <h2 className='font-bold'>Company: <span className='text-[80%] font-light italic'>{company}</span></h2>
              <h2 className='font-bold'>Plate No: <span className='text-[80%] font-light italic'>{plate}</span></h2>
          </div>
    </>
  )
}
