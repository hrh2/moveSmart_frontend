import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Header from '../global/Header'
// eslint-disable-next-line 
import SingleCard from "../global/SingleCard";
import BusesDetails from "./BusSizeDetails"
// eslint-disable-next-line 
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

export default function StationIndex() {
  // eslint-disable-next-line 
   const [data,setData] = useState([])
   // eslint-disable-next-line 
   const [error,setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("moveSmart_station_cashier_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get("https://movesmart.onrender.com/api/dash/cashier");
        setData(response.data.buses);
      } catch (error) {
        setError(error.response.data.message);
        setTimeout(()=>{
          setError(null)
        },3000)
      }
    }
    fetchData();
  }, []);
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
           <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        <Typography variant='h3' className='text-center'>Bus sits statsticts</Typography>
        <Box className=" max-w-[80vw] h-[60vh] overflow-x-scroll relative">
          <BusesDetails buses={data}/>
        </Box>
        <Box className=" grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
          <Box>
            
          </Box>
          <Box></Box>
        </Box>
    </Box>
  )
}