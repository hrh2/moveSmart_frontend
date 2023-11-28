import React from 'react'
import { tokens } from "../../Contexts/theme";
import { Box,useTheme } from "@mui/material";
import {BsArrowBarRight} from "react-icons/bs"
// import CarImage1 from "../../img/bmw-m8-competition-gran-coupe-inform-sd-first-edition-01-removebg-preview.png"
import CarImage2 from "../../img/bmwtaxi-removebg-preview.png"
// import CarImage3 from "../../img/illustration-two-taxi-cars.png"
// import CarImage4 from "../../img/taxi2-removebg-preview.png"
// import CarImage5 from "../../img/taxi4-removebg-preview.png"
// import CarImage6 from "../../img/phone-taxi-removebg-preview.png"

export default function EarnWithUs() {
    const theme = useTheme();
     const colors = tokens(theme.palette.mode);
  return (
    <Box className='mx-0 max-w-full py-5 grid md:grid-cols-2 sm:grid-cols-2  grid-cols-1 gap-3' backgroundColor={colors.primary[600]}>
      <Box className='min-h-[20vh]'>
        <Box className="md:w-1/2 sm:w-2/3 w-5/6 h-full bg-contain bg-no-repeat bg-center mx-auto" style={{backgroundImage:`url(${CarImage2})`}}>
        </Box>
      </Box>
      <Box className="grid grid-cols-1">
        <p className='md:text-2xl sm:text-xl text-lg font-extrabold px-4'>Why Book via Move<span className='text-yellow-500'>Smart</span></p>
        <ul className='px-6'>
            <li>Trusted and Verified by millions,Rda wide</li>
            <li>Free Waiting time Included</li>
            <li>Free Cancellation on every trip</li>
            <li>All airport pickups included </li>
            <li>Support avilable,day and night ,24/7</li>
        </ul>
        <Box p={2} className="">
          <a href='/services' className='text-sm flex font-semibold p-2 px-6 rounded-lg w-1/2 float-right'>and much more<BsArrowBarRight size={20}/> </a>
        </Box>
      </Box>
    </Box>
  )
}
