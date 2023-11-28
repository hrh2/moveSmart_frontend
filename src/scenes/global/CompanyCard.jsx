import React from 'react'
import { tokens } from "../../Contexts/theme";
import { Box,useTheme } from "@mui/material";
import StellaLogo from "../../img/1628097868-64-stella-express-removebg-preview.png"

export default function BusOperatorCard() {
    const theme = useTheme();
     const colors = tokens(theme.palette.mode);
  return (
    <Box className='grid grid-cols-1 p-2 w-[7rem] rounded-md box-shadow overflow-x-scroll' backgroundColor={colors.primary[300]}>
      <Box className="w-full aspect-square bg-contain bg-center" style={{backgroundImage:`url(${StellaLogo})`}}>
      </Box>
      <Box>
        <h1 className='text-center'>Stella</h1>
      </Box>
    </Box>
  )
}