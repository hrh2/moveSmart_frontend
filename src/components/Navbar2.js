import React from 'react'
import { FaTaxi } from 'react-icons/fa'

export default function Navbar() {
    return (
        <div className='w-full text-white md:h-[4.5em] sm:h-[3em] h-2em mt-1 overflow-x-scroll'>
            <div className=' mx-auto bg-blue-300 bg-opacity-40 p-1 md:w-[20rem] sm:w-[15em] w-[20rem] md:h-4/6 sm:h-5/6 grid grid-cols-2 text-center rounded-lg'>
                <a href='/' className='p-1 grid gap-2 grid-flow-col rounded-lg '>
                    <FaTaxi size={"2em"} />
                    <span className='text-[.5em] sm:text-[.8em]'>Booking</span>
                </a>
                <a href='/carRental' className='p-1 grid gap-2 grid-flow-col rounded-lg bg-blue-950'>
                    <FaTaxi size={"2em"} />
                    <span className='text-[.5em] sm:text-[.8em]'>Car Rental</span>
                </a>
            </div>
        </div>
    )
}
