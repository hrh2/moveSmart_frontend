import React from 'react'
import Axios from 'axios'
import Profile from '../../components/profile_discription'

export default function Main() {
  return (
    <div>
      <div className='container-fluid p-0 bg-transparent'>
        <div>
          <Profile/>
        </div>
      </div>
    </div>
  )
}
