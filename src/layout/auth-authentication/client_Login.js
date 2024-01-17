import React, { useState } from 'react';
import {Box} from "@mui/material"
import { Form, Alert} from 'react-bootstrap';
import Axios from 'axios';
import{TbLanguage}from 'react-icons/tb'
import { FcGoogle } from 'react-icons/fc'
import SVGImage from "../../img/blob-haikei.svg"
import SVGImage1 from "../../img/blob-scene-haikei.svg"


const Login = () => {
     const [data, setData] = useState({
          email: '',
          password: '',
     });

     const [error, setError] = useState('');

     const handleChange = (event) => {
          const { name, value } = event.target;
          setData((prevData) => ({ ...prevData, [name]: value }));
     };

     const handleSubmit = async (event) => {
          event.preventDefault(); // prevent the default form submission behavior
          try {
               const response = await Axios.post('https://movesmart.onrender.com/api/login', data);
               const token = response.data.token;
               localStorage.setItem('moveSmart_client_token', token);
               // console.log(token);
               Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
               window.location = "/";
          } catch (error) {
               console.error(error);
               if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message);
               } else {
                    setError('An unexpected error occurred. Please try again later.');
               }
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
                         <h1 className="text-center mb-4 fw-bold">Login</h1>
                         <Form onSubmit={handleSubmit}>
                              <Box className="grid grid-flow-row gap-2">
                                   <input
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={data.email}
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
                         <button type="button" className="flex justify-center items-center gap-2 mt-2 mx-auto p-2 px-4 bg-slate-400 rounded-3xl">continue with<FcGoogle size={18} /></button>
                         <p>New to MoveSmart  <a href="/signup" className="link-info">Sign up</a></p>
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

