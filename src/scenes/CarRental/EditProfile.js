import React, { useState,useEffect } from "react";
import Axios from "axios";
import Dropzone from "react-dropzone";
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../Contexts/theme";

import {FaCloudUploadAlt,FaPlus} from "react-icons/fa"

 
const EditProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [error, setError] = useState('')
  const [message,setMessage] = useState('')
  const [imageSrc, setImageSrc] = useState(null);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone:null,
    cardNumber:'',
    username: '',
    password: '',
    image:null
  });

  const imageDivStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "10rem", // Adjust the width and height as needed
    height: "10rem",
  };

  useEffect(() => {
   async function fetchData() {
     try {
       const token = await localStorage.getItem("moveSmart_client_token");
       Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
       const response = await Axios.get('http://localhost:3050/api/profile');
       setData({...response.data,password :null})
       setImageSrc(response.data.image)
     } catch (error) {
        setError(error.response.data.message);
     }
   }
   fetchData()
  }, [])


  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        data.image=imageSrc
        const token = await localStorage.getItem("moveSmart_client_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`; 
        const response = await Axios.put('http://localhost:3050/api/profile', data);
        setMessage(response.data.message)
        window.location = "/";
    } catch (error) {
        setError(error.response.data.message);
    }
};
  return (
    <form className=" p-2 md:w-4/5 w-full  mx-auto" onSubmit={handleSubmit}>
      <div className="mx-auto w-[10rem] aspect-square">
        <Dropzone onDrop={handleDrop} accept="image/*" >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="w-full h-full rounded-full relative bg-white text-center flex items-center"
              style={imageDivStyle}
            >
              <input {...getInputProps()} />
              {imageSrc ? null : (
                <p className="text-black text-center w-full grid grid-flow-row">
                    <FaCloudUploadAlt size={30} className="mx-auto"/>
                   <span className="italic">Drop or Tap to upload</span>
                   
                </p>
              )}<FaPlus size={25} className=" absolute bottom-3 right-2 text-slate-500"/>
              <FaPlus size={25} className=" absolute bottom-3 right-2 text-slate-500"/>
            </div>
          )}
        </Dropzone>
      </div>
      <div>
      <Box className='text-center py-4 rounded-lg mt-4' backgroundColor={colors.primary[400]}>
                  <h2 className='py-4 font-bold'>Personal</h2>
                  <Box className='grid grid-flow-row gap-2'>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlhtmlFor="firstName" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>First Name</label>
                          <input 
                          type='text' 
                          name="firstName" 
                          id='firstName' 
                          className='w-full h-full rounded-lg bg-transparent border-2'
                          value={data.firstName}
                          onChange={handleChange}
                          />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlhtmlFor="lastName" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Last Name</label>
                          <input 
                          type='text' 
                          name="lastName" 
                          id='lastName' 
                          className='w-full h-full rounded-lg bg-transparent border-2'
                          value={data.lastName}
                          onChange={handleChange} 
                          />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlhtmlFor="email" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Email</label>
                          <input 
                          type='email' 
                          name="email" 
                          id='email' 
                          className='w-full h-full rounded-lg bg-transparent  border-2' 
                          value={data.email}
                          onChange={handleChange} />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlhtmlFor="phone" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Phone</label>
                          <input 
                          type='number' 
                          name="phone" 
                          id='phone' 
                          className='w-full h-full rounded-lg bg-transparent border-2'
                          value={data.phone}
                          onChange={handleChange} 
                          />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlhtmlFor="Card" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Card</label>
                          <input 
                          type='text' 
                          name="Card" 
                          id='Card' 
                          className='w-full h-full rounded-lg bg-transparent border-2' 
                          value={data.cardNumber}
                          onChange={handleChange}/>
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlhtmlFor="confirmPassword" className='absolute top-[-0.5rem] left-4 px-2'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Confirm with Your Password</label>
                          <input 
                          type='password' 
                          name="password" 
                          id='confirmPassword' 
                          className='w-full h-full rounded-lg bg-transparent border-2' 
                          value={data.password}
                          onChange={handleChange}/>
                      </Box>
                      <Box className=' mx-auto w-5/6 flex justify-center  my-3'>
                         <button type="submit" className="py-3 px-9 bg-blue-500 rounded-lg font-bold">Update</button>
                      </Box>
                      {!message&&<p>{error}</p>}
                      {!error&&<p>{message}</p>}
                  </Box>
        </Box>
      </div>
    </form>
  );
};

export default EditProfile;
