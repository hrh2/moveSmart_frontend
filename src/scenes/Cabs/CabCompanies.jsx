// eslint-disable-next-line 
import React,{useState,useEffect} from 'react'
import { tokens } from "../../Contexts/theme";
import { Box,useTheme } from "@mui/material";
// import CarImage1 from "../../img/bmw-m8-competition-gran-coupe-inform-sd-first-edition-01-removebg-preview.png"
// import CarImage2 from "../../img/bmwtaxi-removebg-preview.png"
import CarImage3 from "../../img/illustration-two-taxi-cars.png"
// import CarImage4 from "../../img/taxi2-removebg-preview.png"
// import CarImage5 from "../../img/taxi4-removebg-preview.png"
// import CarImage6 from "../../img/phone-taxi-removebg-preview.png"
import CabCompanyCard from "../global/CompanyCard"

export default function EarnWithUs() {
    const theme = useTheme();
     const colors = tokens(theme.palette.mode);
  return (
    <Box className='mx-0 max-w-full py-5 grid md:grid-cols-2 sm:grid-cols-2  grid-cols-1 gap-3' backgroundColor={colors.primary[600]}>
      <Box className="grid grid-cols-1">
        <p className='md:text-2xl sm:text-xl text-lg font-extrabold px-4 mx-auto md:w-4/5 sm:w-5/6 w-11/12'>Companies Connected with Move<span className='text-yellow-500'>Smart</span></p>
        <Box p={2} className="mx-auto md:w-4/5  sm:w-5/6 w-11/12 p-3 flex gap-3 rounded-lg">
          <CabCompanyCard/>
          <CabCompanyCard/>
          <CabCompanyCard/>
          <CabCompanyCard/>
        </Box>
      </Box>
      <Box className='min-h-[20vh]'>
        <Box className="md:w-1/2 sm:w-2/3 w-5/6 h-full bg-contain bg-no-repeat bg-center mx-auto" style={{backgroundImage:`url(${CarImage3})`}}>
        </Box>
      </Box>
    </Box>
  )
}
