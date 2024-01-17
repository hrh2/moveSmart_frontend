import React,{useState,useEffect} from 'react'
import { Typography } from '@mui/material'
import Axios from 'axios'
import RecommendCarCard from './RecommendCard'

export default function Recommendeds() {
  const [data,setData]=useState([])
  const [error,setError]=useState(null)
  useEffect(() => {
    async function fetchData() {
      try {
        const token =localStorage.getItem("moveSmart_client_token")
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get('https://movesmart.onrender.com/api/car/recommends');
        setData(response.data);
      } catch (error) {
        setError(error.response.data.message);
        setTimeout(()=>{
          setError(false)
        },3000)
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-row  gap-3 overflow-x-scroll p-2 w-full">
      {error&&
        <Typography variant='h6' className=' text-red-500'>
          {error}
        </Typography>
      }
      {data.map((car) => (
          <RecommendCarCard item={car} key={car._id} />
      ))}
    </div>
  )
}
