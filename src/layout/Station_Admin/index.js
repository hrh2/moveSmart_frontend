import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Header from '../../scenes/global/Header'
import SingleCard from "../../scenes/global/SingleCard";
// eslint-disable-next-line
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const Station={
  title: "...",
  totalNumber:"",
  icon:"",
  color:"bg-gradient-to-bl to-[#75ff7c57] from-[#7316b167]",
}

export default function StationIndex() {
   const [data,setData] = useState({})
   // eslint-disable-next-line
  const [stationName,setStationName] = useState("Still Fetching");
  const [error, setError] = useState('');


  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("moveSmart_station_admin_token");
        if(!token){
           setError("First Login Please");
           window.location = "/landing"
          }
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get('https://movesmart.onrender.com/api/station/admin');
        setData(response.data);
        setStationName(response.data.name);
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
        {error&&<Typography className="text-red-500 font-medium">{error}</Typography>}
        <Box className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
          <SingleCard item={{...Station,title:data.name}}/>
        </Box>
        <Box className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          <Box className="p-7 rounded-md min-h-[320px] pb-[50px] bg-gradient-to-br from-[#75ff7c57] to-[#7316b167]">
            <h3 className="text-lg font-semibold mb-[20px]">Buses Status</h3>
          </Box>
          <Box className="p-7 rounded-md h-[320px] pb-[50px] bg-gradient-to-br to-[#75ff7c57] from-[#7316b167]">
            <h3 className="text-lg font-semibold mb-[20px] ">All Cahiers</h3>  
          </Box>
        </Box>
    </Box>
  )
}