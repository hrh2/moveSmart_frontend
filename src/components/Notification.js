import React from 'react'
import  {FaBell} from 'react-icons/fa'
import NotificationCard from './subcomponents/NotificationCard'

export default function Notification() {
  return (
      <div className=' h-auto  md:w-1/3 sm:w-1/3 w-10/12 bg-blue-700 bg-opacity-60 fixed md:left-[5.5%] sm:left-[8.5%] left-[8%] md:top-4 top-14 p-2 rounded-md text-white z-20 grid grid-flow-row gap-2'>
          <div className='relative'>
              {/* <button type="" className='px-4 md:invisible sm:invisible visible absolute right-2'>x</button> */}
              <h1 className='text-center md:w-full sm:w-full w-4/5 py-6 px-12 flex gap-4 float-left'> <FaBell size={20} /> Notifications</h1>
          </div>
            <NotificationCard/>
            <NotificationCard/>
    </div>
  )
}
