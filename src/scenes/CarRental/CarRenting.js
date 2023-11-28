import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Box } from "@mui/material";
import Images from './RentingImageDisplay';
import CarDetails from './CarTitleDetails';
import Form from './RentingForm';
import CommentForm from './Commentform';

export default function Main() {
  const { id } = useParams();
  const [imagesArray, setImages] = useState([]);
  const [data, setData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("moveSmart_client_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        const response = await Axios.get(`http://localhost:3050/api/car/single/${id}`);
        setData(response.data);
        setImages(response.data.images);
      } catch (error) {
          setError("Unexpected error occurred: ");
      }
    }
    fetchData();
  }, [id]); // Include 'id' as a dependency to re-fetch data when the route parameter changes

  // Conditional rendering to ensure data is available before rendering child components
  return (
    <Box className='content px-2'>
      <Box className="text-red-500">{error}</Box>
      {Object.keys(data).length > 0 && (
        <>
          <Box className="w-[80vw] mx-auto">
            <Images imagesArray={imagesArray} />
          </Box>
          <CarDetails plate={data.plate} name={data.name} bland={data.bland} company={data.company} />
          <Form details={data} />
          <CommentForm />
        </>
      )}
    </Box>
  );
}
