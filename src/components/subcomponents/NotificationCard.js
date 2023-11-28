import React from 'react'
import Img from '../../img/prof.jpg'

export default function NotificationCard() {
  return (
      <div className='w-11/12 grid grid-flow-col bg-slate-950 mx-auto relative rounded-3xl p-1'>
          <div className=' aspect-square w-[3rem] rounded-full  bg-cover bg-center' style={{ backgroundImage: `url(${Img})` }} ></div>
          <div className='text-[.55rem]  text-justify p-2 overflow-hidden'>
              lorem Ipsum is Lorem Ipsum et just ver   dolor lorem     conv    aptur met   duis. Lorem Ipsum et just ver dolor lorem conv
          </div>
          <a href='/' className="absolute bottom-1 right-3 font-bold text-[.75em]">Vew</a>
      </div>
  )
}
