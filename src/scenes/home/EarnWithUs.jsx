







import React from 'react'
import { tokens } from "../../Contexts/theme";
import { Box,useTheme } from "@mui/material";
import CarImage from "../../img/bmw-m8-competition-gran-coupe-inform-sd-first-edition-01-removebg-preview.png"

export default function EarnWithUs() {
    const theme = useTheme();
     const colors = tokens(theme.palette.mode);
  return (
    <Box className='mx-0 max-w-full py-5 grid md:grid-cols-2 sm:grid-cols-2  grid-cols-1 gap-3' backgroundColor={colors.primary[600]}>
      <Box className='min-h-[20vh]'>
        <Box className="md:w-1/2 sm:w-2/3 w-5/6 h-full bg-contain bg-no-repeat bg-center mx-auto" style={{backgroundImage:`url(${CarImage})`}}>
        </Box>
      </Box>
      <Box className="grid grid-cols-1">
        <p className='md:text-4xl sm:text-3xl text-xl font-extrabold px-4'>Do You Want to Earn With Us With Your Car ? <br/>
        So Don'T Be Late</p>
        <Box p={2}>
          <a href='/cars/add' className='text-sm font-semibold p-2 px-3 bg-blue-950 rounded-lg'>Become a Driver</a>
        </Box>
      </Box>
    </Box>
  )
}
