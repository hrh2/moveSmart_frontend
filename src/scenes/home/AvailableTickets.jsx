import React from 'react'
import BookItem from './BookItem'

export default function AvailableTickets({data,from,to}) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  return (
    <div className='text-white'>
      <h1 className=' font-bold border-l-4 p-2 text-[.5em] sm:text-[.8em] md:text-[1.245em] my-1'>Tickets available {formattedDate}</h1>
      <div className='grid grid-flow-row gap-3 p-2 common-transition'>
        {/* cards */}
        {data.length!==0?
        data.map((item,i)=>(
          <>{item.availableSize!==0?<BookItem key={i} time={formattedDate} details={{from,to}} item={item} />:""}</>
        ))
        :<p className='text-center py-4 font-bold'>No remaining spaces</p>}
      </div>
    </div>
  )
}
