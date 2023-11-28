import React,{useState,useEffect} from "react";
import {Typography} from '@mui/material'
import Axios from "axios";
import {Box} from "@mui/material"
import CarItem from "../../scenes/CarRental/CarItem";
import Recommendeds from "../../scenes/CarRental/Recommendeds";
import Header from "../../scenes/global/Header";

const CarListing = () => {
    const [data,setData]=useState([])
    const [error, setError] = useState('')
    useEffect(() => {
      async function fetchData() {
        try {
          const token =localStorage.getItem("moveSmart_client_token");
          Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          const response = await Axios.get('http://localhost:3050/api/car');
          setData(response.data)
        } catch (error) {
            setError(error.response.data.message);
            setTimeout(()=>{
              setError(false)
            },1700)
        }
      }
      fetchData()
    },[])
  return (
    <Box>
       <Header title="Rent Cars" subtitle={data.length!==0?"Easy way to move Smart . Welcome!!":"Currently no cars availabe feel free to checkout any other time"} />
          {error&&<Typography>
            {error}
          </Typography>}
          <Box>
            <Recommendeds/>
          </Box>
          <Box className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4  p-2">
            {data.map((car) => (
              <CarItem car={car} key={car._id} />
            ))}
          </Box>
    </Box>
  );
};

export default CarListing;
