import React,{useState} from 'react'
import { tokens } from "../../Contexts/theme";
import { Box,useTheme,Typography} from "@mui/material";
import Background_image from "../../img/wave-bg.svg"
import Logo from "../../img/logo.png"
import { Link } from 'react-router-dom';
import {TbArrowBigRightLines} from"react-icons/tb"
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"

export default function Landing() {
    const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     const [isRoles,setIsRole]= useState(false)
     function toggleRoles(){
        setIsRole(!isRoles)
     }

  return (
    <Box className='min-h-screen w-full bg-cover bg-center flex items-center justify-center' style={{backgroundImage:`url(${Background_image})`}}>
        <Box className="md:w-4/5 grid md:grid-cols-2 grid-cols-1 ">
            <Box className="">
            <Typography variant='h1' className='' color={colors.grey[100]} px={10} >
                <p className='md:text-7xl'>
                WellCome To <span className=' font-extrabold'>move<span className='text-yellow-500'>Smart</span></span>
                </p>
            </Typography>
            <Box className=" mx-auto w-[10rem] aspect-square bg-cover bg-center" style={{backgroundImage:`url(${Logo})`}}></Box>
            </Box>
            <Box >
                <Typography className="flex flex-col gap-3 font-bold text-base md:text-2xl" variant='' color={colors.grey[100]} px={10} >
                    <Link to={"/login"} className='flex gap-2 items-center'>personal Acount <TbArrowBigRightLines className='text-yellow-500' size={25}/></Link>
                    <Box className=''>
                        <p className='flex gap-2 items-center hover:cursor-pointer' onClick={()=>{toggleRoles()}}>
                            Login for other Roles 
                            {isRoles?
                            <IoIosArrowDown className='text-yellow-500' size={25}/>:
                            <IoIosArrowUp className='text-yellow-500' size={25}/>}
                        </p>
                        {isRoles&&<Box className="pl-8 text-[95%] font-normal">
                          <Link to={"/login/vpfancyAdmin"} className='flex gap-2 items-center'>VpFancy Admin<TbArrowBigRightLines className='text-yellow-500' size={20}/></Link> 
                          <Link to={"/login/admin"} className='flex gap-2 items-center'>Station Admin <TbArrowBigRightLines className='text-yellow-500' size={20}/></Link>
                          <Link to={"/login/cashier"} className='flex gap-2 items-center'>Station Cashier<TbArrowBigRightLines className='text-yellow-500' size={20}/></Link>
                        </Box>}
                    </Box>
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}