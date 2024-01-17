import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Header from '../../scenes/global/Header'
import SingleCard from "../../scenes/global/SingleCard";
import StationChart from "../../scenes/VpAdmin_stations/StationStatistics";
import BusChart from "../../scenes/VpAdmin_stations/ActiveStation";
// eslint-disable-next-line 
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// eslint-disable-next-line 
import { tokens } from "../../Contexts/theme";
const stationObj = {
  title: "Total Stations",
  totalNumber: 25,
  icon: "ri-steering-2-line",
  color:"bg-blue-500"
};
// eslint-disable-next-line 
const clientObj = {
  title: "Total Users",
  totalNumber: "85k",
  icon: "ri-user-line",
  color:"bg-green-500"
};


const linkedStationsObj={
  title: "Linded Stations",
  totalNumber:6,
  icon:"",
  color:"bg-yellow-500",
}

export default function StationIndex() {

  // const [user, setUser] = useState([]);
  const [station,setStation] = useState([]);
  const [totalStations, setTotalStations] = useState(0);
  // eslint-disable-next-line 
  const [totalClients, setTotalClients] = useState(0);
  const [totalLinkedStations, setLinkedStations] = useState(0);
  // eslint-disable-next-line 
  const [error, setError] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("moveSmart_client_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        const response = await Axios.get('https://movesmart.onrender.com/api/station/dashboard');
        // setUser(response.data.user);
        setStation(response.data.linked);
        setTotalStations(response.data.totalStations);
        setTotalClients(response.data.totalClients);
        setLinkedStations(response.data.linkedStations)
        setStation(response.data.station)
      } catch (error) {
        setError(error.response?.data?.message || 'An error occurred.');
      }
    }
    fetchData();
  }, []);
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
           <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        <Box className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
          <SingleCard item={{...stationObj,totalNumber:totalStations}}/>
          <SingleCard item={{...linkedStationsObj,totalNumber:totalLinkedStations}}/>
        </Box>
        <Box className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          <Box className="p-7 rounded-md h-[320px] pb-[50px] bg-gradient-to-br from-[#5b186467] to-[#3e145a50]">
            <h3 className="text-lg font-semibold mb-[20px]">Active Station</h3>
            <StationChart  stations={station}/>
          </Box>
          <Box className="p-7 rounded-md h-[320px] pb-[50px]">
            <h3 className="text-lg font-semibold mb-[20px]">Active Stations</h3>
            <BusChart />
          </Box>
        </Box>
    </Box>
  )
}
