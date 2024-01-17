import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {Box} from '@mui/material'
import SingleCard from '../../scenes/global/SingleCard'
import CarRates from '../../scenes/CarRental/MileChart'
import CarStatsChart from '../../scenes/CarRental/CarStatusChart'
import ViewClientCars from '../../scenes/CarRental/ViewClientCars'
import Header from '../../scenes/global/Header'
import Stars from '../../scenes/global/Stars'

const carObj = {
  title: "Total Cars",
  totalNumber: 0,
  icon: "ri-police-car-line",
  color:"bg-green-400"
};


const viewsObj = {
  title: "Average Car Views",
  totalNumber: "0",
  icon: "ri-user-line",
  color:"bg-blue-400",
};

const clientsObj = {
  title: "Client Requests",
  totalNumber: 0,
  icon: "ri-timer-flash-line",
  color:"bg-yellow-400",
};
const ratingObj={
  title:"Rate :",
  number:[],
  color:"",
}
function numberOfStarts(rate){
  if(rate <= 20){
    return [1]
  }else if(rate <= 40){
    return [1,1]
  }else if(rate <= 60){
    return [1,1,1]
  }else if(rate <= 80){
    return[1,1,1,1]
  }else{
    return [1,1,1,1,1]
  }
}

export default function ClientCars() {
  const [data, setData] = useState({});
  const [carTotalNumber, setCarTotalNumber] = useState(0);
  const [viewsTotalNumber, setViewsTotalNumber] = useState(0);
  const [requestTotalNumber, setRequestTotalNumber] = useState(0);
  const [rate, setRate] = useState(0)
  const [rateArray, setRateArray] = useState([1])
  const [error, setError] = useState('');


  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("moveSmart_client_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        const response = await Axios.get('https://movesmart.onrender.com/api/car/mine');
        setData(response.data);
        setCarTotalNumber(response.data.totalCars);
        setViewsTotalNumber(response.data.avgViews);
        setRequestTotalNumber(response.data.totalClients+0)
        setRate(response.data.rating)
        setRateArray(numberOfStarts(rate))
      } catch (error) {
        console.error(error);
        setError(error.response?.data?.message || 'An error occurred.');
      }
    }
    fetchData();
  }, []);
  return (
    <Box className="">
       <Header title="MY cars" subtitle={carTotalNumber!==0?"welcome to your cars stock. view Statistics ":"Checkout Car statistics here if you start earning with us with your car"}/>
      {carTotalNumber!==0?
        <Box className="dashboard__wrapper">
        <Box className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 p-2">
          <Stars item={{...ratingObj,number:rateArray}}/>
          <SingleCard item={{ ...carObj, totalNumber: carTotalNumber }} />
          <SingleCard item={{ ...viewsObj, totalNumber: viewsTotalNumber }} />
          <SingleCard item={{...clientsObj,totalNumber:requestTotalNumber}} />
        </Box>

        <Box className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          <Box className="p-7 rounded-md h-[320px] pb-[50px]">
            <h3 className="text-lg font-semibold mb-[20px]">Car rate statistics</h3>
            <CarRates cars={data.cars} />
          </Box>

          <Box className="p-7 rounded-md h-[320px] pb-[50px]">
            <h3 className="text-lg font-semibold mb-[20px]">Clients Statistics</h3>
            <CarStatsChart />
          </Box>
        </Box>
        <Box>
          {data.cars && <ViewClientCars cars={data.cars} />}
        </Box>
      </Box>:""
      }
    </Box>
  )
}
