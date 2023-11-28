import React from 'react'
import { FcAdvance } from "react-icons/fc";
// import { FaDownload } from 'react-icons/fa'
import {useTheme} from '@mui/material'
import {tokens} from '../../Contexts/theme'
export default function TicketCard({ticket,used,suspended}) {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
  return (
    <>
      <div className='p-1  px-3 grid grid-flow-col gap-4 text-center border-b-4' style={{backgroundColor:`url(${colors.grey[500]})`}}>
          <span className='font-extralight text-[75%] py-1'>{ticket.time} <br/>  {ticket.date}</span>
          <span className={`flex gap-3 ${ticket.isGiven?"line-through":""}`}>{ticket.from} <FcAdvance size={24} />{ticket.to}</span>
          {/* {<a href='/' className='font-bold text-[80%]'>view</a>} */}
          {!used&&<a href='/' className='p-1'>{ticket.isGiven?<span className='text-green-500'>Recieved</span>:"View"}</a>}
          <div>
          </div>
      </div>
    </>
  )
}
