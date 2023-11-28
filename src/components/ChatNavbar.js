import React from 'react'
import { FaHome,FaBell} from 'react-icons/fa'

export default function Navbar2() {
  return (
      <div className=' h-16 bg-blue-950 w-5/6 mx-auto p-2 relative'>
          <a href='/'><FaHome size={30} className=' aspect-square w-12' /></a>
          <div className='grid grid-cols-2 gap-2  text-white  w-24 absolute right-4 top-3'>
              <FaBell size={30} />
          </div>
      </div>
  )
}
