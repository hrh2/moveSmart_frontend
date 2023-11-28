import React from 'react'
import { tokens } from "../../Contexts/theme";
import { Box,useTheme } from "@mui/material";
import BusOperatorCard from '../global/CompanyCard';

export default function  BusOperators() {
    const theme = useTheme();
     const colors = tokens(theme.palette.mode);
  return (
    <Box className='backgroundColor={colors.primary[600]}' backgroundColor={colors.primary[600]}>
      <h1 className='md:w-4/5 mx-auto w-5/6 py-3 text-xl font-bold'>Working With</h1>
         <Box className="mx-auto md:w-4/5  sm:w-5/6 w-11/12 p-3 flex gap-3 rounded-lg" >
            <BusOperatorCard/>
            <BusOperatorCard/>
            <BusOperatorCard/>
         </Box>
    </Box>
  )
}