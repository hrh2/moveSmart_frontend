import React, { useState } from 'react';
import {Box} from "@mui/material"
import { Form, Alert} from 'react-bootstrap';
import Axios from 'axios';
import{TbLanguage}from 'react-icons/tb'
import{BsFillPersonCheckFill} from 'react-icons/bs'
import SVGImage from "../../img/blob-haikei.svg"
import SVGImage1 from "../../img/blob-scene-haikei.svg"


const Login = () => {
     const [data, setData] = useState({
          stationNumber: '',
          cashierID:null,
          password: '',
     });
    const [ok,setOk] = useState(false);
     const [error, setError] = useState('');

     const handleChange = (event) => {
          const { name, value } = event.target;
          setData((prevData) => ({ ...prevData, [name]: value }));
     };

     const handleSubmit = async (event) => {
          event.preventDefault(); // prevent the default form submission behavior
          try {
               const response = await Axios.post('http://localhost:3050/api/login/cashier', data);
               const token = response.data.token;
               localStorage.setItem('moveSmart_station_cashier_token', token);
               Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
               setOk(true);
               setTimeout(()=>{
                    window.location = "/cashier";
               },1000)
          } catch (error) {
               setError(error.response.data.message);
          }
     };

     return (
          <div className='w-full min-h-screen grid md:grid-cols-12 sm:grid-cols-12 grid-cols-1'>
               <div className="md:col-span-5 sm:col-span-6 bg-cover bg-center h-screen"style={{backgroundImage:`url(${SVGImage})`}} >
                    <div className="btn-group position-absolute top-0 start-0">
                         <button type="button" className="btn  dropdown-toggle btn1" data-bs-toggle="dropdown" aria-expanded="false">
                              <TbLanguage size='1.2em' className="lang text-white" />
                         </button>
                         <ul className="dropdown-menu text-[.6rem]">
                              <li><a className="dropdown-item" href="hrh">English(US)</a></li>
                              <li><a className="dropdown-item" href="hrh">English(UK)</a></li>
                              <li><a className="dropdown-item" href="hrh">French</a></li>
                              <li><a className="dropdown-item" href="hrh">Latin</a></li>
                         </ul>
                    </div>
                    <div className="p-5 text-center ">
                         <h1 className="text-center mb-4 fw-bold">station Cashier</h1>
                         <div className='flex items-center justify-center'>
                              {ok&&<BsFillPersonCheckFill size={28} className=' text-green-500'/>}
                         </div>
                         <Form onSubmit={handleSubmit}>
                              <Box className="grid grid-flow-row gap-2">
                                    <input
                                        type="text"
                                        placeholder="station Unique Number"
                                        name="stationNumber"
                                        value={data.stationNumber}
                                        className="p-3 bg-transparent border-b-2"
                                        onChange={handleChange}
                                        required />
                                    <input
                                        type="number"
                                        placeholder="Enter Your ID"
                                        name="cashierID"
                                        value={data.cashierID}
                                        className="p-3 bg-transparent border-b-2"
                                        onChange={handleChange}
                                        required />

                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        className="p-3 bg-transparent border-b-2"
                                        required />

                              <div className='row justify-content-center'>
                                   <button type="submit" className="w-50 mt-4 rounded-lg p-2 bg-primary">
                                        Login
                                   </button>
                              </div>
                              </Box>
                         </Form>
                         <p>I need a personal account  <a href="/signup" className="link-info">Sign UP</a></p>
                    </div>
                    {error && <Alert variant="danger" className=' absolute bottom-2'>{error}</Alert>}
               </div>
               <div className="md:col-span-7 sm:col-span-6 flex items-center justify-center  bg-cover bg-center SignUp_divisions rounded-l-[2rem]" style={{backgroundImage:`url(${SVGImage1})`}}>
                    <h1 className='md:text-8xl sm:text-5xl font-extrabold'>Move<span className='text-yellow-500'>Smart</span></h1>
               </div>
               </div>
     );
};

export default Login;

