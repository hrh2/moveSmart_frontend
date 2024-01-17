import React,{useState} from "react";
import Axios from "axios";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/CarItem.css";
import TrackableView from "./TrackCarVisibility";
import {Typography} from "@mui/material";

const CarItem = ({car}) => {
  // eslint-disable-next-line
  const [massage,setMessage]=useState("")
  const [error,setError] = useState(null)
  async function fetchData(car_id) {
    try {
      const token =localStorage.getItem("moveSmart_client_token");
      Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await Axios.get(`https://movesmart.onrender.com/api/car/addviews/${car_id}`);
      
        setMessage(response.data.message)
    } catch (error) { 
        setError(error.response.data.message);
    }
  }
  const handleCarViews = (car_id) => {
    fetchData(car_id);
  };
  const { images, name,_id,specifications } = car;
  return (
    <Box lg="4" md="4" sm="6" className="mb-5">
      <div className="border-2 border-gray-700 p-2 rounded-md">
        <div className="car__img bg-cover bg-center w-full h-[16rem]" style={{backgroundImage:`url(${images[0]})`}}>
          {/* <img src={imgUrl} alt="" className="w-100" /> */}
        </div>
        <TrackableView onInView={()=>handleCarViews(car._id)} />
        <div className="car__item-content mt-4 md:text-xs sm:text-[0.6rem] text-[0.5rem]">
          <h4 className="text-center">{name}</h4>
          <h6 className="rent__price text-center mt-">
            ${specifications.price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {"model-"+specifications.model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {specifications.isAutomatic ? "Automatic" : "Manual"}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {specifications.speed+"mph"}
            </span>
          </div>
          <Link to={`/cars/single/${_id}`}>
          <button className=" w-50 car__item-btn car__btn-rent">
            Rent
          </button>
          </Link>
          <Link to={`/cars/details/${_id}`}>
          <button className=" w-50 car__item-btn car__btn-details">
            Details
          </button>
          </Link>
        </div>
        {error&&<Typography variant="h6" className="text-red-500">
          {error}
        </Typography>}
      </div>
    </Box>
  );
};

export default CarItem;
