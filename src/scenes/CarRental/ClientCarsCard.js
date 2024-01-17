import React, { useState } from "react";
import Axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecommendCarCard = (props) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDelete = async (car_id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this resource?");
    
    if (!shouldDelete) {
      return; // User canceled the deletion
    }

    try {
      const token = await localStorage.getItem("token");
      Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await Axios.delete(`https://movesmart.onrender.com/api/car/single/${car_id}`);
      setMessage(response.data.message);
      alert(response.data.message);
      window.location = "/cars/mine";
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred during deletion.");
    }
  };

  const { name, images, specifications, color, _id } = props.car;

  return (
    <div className={` p-[20px] rounded-md cursor-pointer bg-slate-400 ${color}`}>
      <div className="recommend__car-top">
        <h5 className=" flex items-center gap-4 mb-[10px]">
          <span>
            <i className="ri-refresh-line text-[1.3rem]"></i>
          </span>
        </h5>
      </div>

      <div className="">
        <img src={images[0]} alt="" />
      </div>
      <div className=" text-base my-[10px] ">
        <h4 className="text-shadow">{name}</h4>
        <div className=" flex items-center justify-center">
          <div className="flex items-center justify-between gap-4">
            <p className=" flex items-center gap-4">
              <i className="ri-repeat-line"></i>
              {specifications.fuelkm}km/l
            </p>
            <p>
              <i className="ri-settings-2-line"></i>
            </p>
            <p>
              <i className="ri-timer-flash-line"></i>
            </p>
          </div>
          <span>${specifications.price}/day</span>
        </div>
      </div>
      <div className=" flex gap-4">
        <Link to={`/cars/update/${_id}`}><FaEdit size={20} className="" /></Link> 
        <FaTrash size={20} className="text-red-600 text-shadow" onClick={() => handleDelete(_id)} />
      </div>
    </div>
  );
};

export default RecommendCarCard;
