import React,{ useState } from "react";
import {Box} from "@mui/material"
import Dropzone from "react-dropzone";
import { Form, Alert } from "react-bootstrap";
import { FcGoogle} from "react-icons/fc";
import {FaPlus,FaCloudUploadAlt} from "react-icons/fa";
import { TbLanguage } from "react-icons/tb"
import SVGImage from "../../img/wave-haikei.svg"
import SVGImage1 from "../../img/blob-scatter-haikei.svg"
import Axios from "axios";

const Signup = () => {
     // const [file, setFile] = useState(null);
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
     const [image,setImage]=useState(null)

     
    
     const [error, setError] = useState('');
     const handleChange = ({ currentTarget: input }) => {
          setData({ ...data, [input.name]: input.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               data.image=image
               const response = await Axios.post('http://localhost:3050/api/user', data);
               const token = response.data.token;
               localStorage.setItem('moveSmart_client_token', token);
               Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
               window.location = "/";
          } catch (error) {
            setError(error.response.data.message);
          }
     };
     const imageDivStyle = {
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "10rem", // Adjust the width and height as needed
          height: "10rem",
        };
        const handleDrop = (acceptedFiles) => {
          const file = acceptedFiles[0];
          const reader = new FileReader();
      
          reader.onload = (event) => {
            setImage(event.target.result);
          };
      
          if (file) {
            reader.readAsDataURL(file);
          }
        };

     return (
          <div className="w-full min-h-screen grid md:grid-cols-12 sm:grid-cols-12 grid-cols-1">
               <div className=" md:col-span-7 sm:col-span-6 SignUp_divisions flex items-center justify-center rounded-r-[2rem] bg-cover bg-center" style={{backgroundImage:`url(${SVGImage})`}}>
                    <h1 className='md:text-8xl sm:text-5xl font-extrabold'>Move<span className='text-yellow-500'>Smart</span></h1>
               </div>
               <div className=" md:col-span-5 sm:col-span-6 h-screen overflow-y-scroll bg-cover bg-center" style={{backgroundImage:`url(${SVGImage1})`}}>
                    <div className="btn-group position-absolute top-0 end-0">
                         <button type="button" className="btn  dropdown-toggle btn1" data-bs-toggle="dropdown" aria-expanded="false">
                              <TbLanguage size='1.2em' className="lang text-white" />
                         </button>
                         <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="hrh">English(US)</a></li>
                              <li><a className="dropdown-item" href="hrh">English(UK)</a></li>
                              <li><a className="dropdown-item" href="hrh">French</a></li>
                              <li><a className="dropdown-item" href="hrh">Latin</a></li>
                         </ul>
                    </div>
                    <div className="p-5 text-center">
                         <h1 className="font-bold text-lg">Sign Up</h1>
                         {error && <Alert variant="danger">{error}</Alert>}
                         <Form onSubmit={handleSubmit} >
                         <div className="mx-auto w-[10rem] aspect-square">
                              <Dropzone onDrop={handleDrop} accept="image/*" >
                                   {({ getRootProps, getInputProps }) => (
                                        <div
                                         {...getRootProps()}
                                         className="w-full h-full rounded-full relative bg-white text-center flex items-center"
                                         style={imageDivStyle}
                                         >
                                   <input {...getInputProps()} />
                                    {image ? null : (
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
                              <Box className="grid grid-flow-row gap-2">
                                   <input
                                        type="text"
                                        name="firstName"
                                        value={data.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="p-3 bg-transparent border-b-2"
                                        required
                                   />
                                   <input
                                        type="text"
                                        name="lastName"
                                        value={data.lastName}
                                        onChange={handleChange}
                                        className="p-3 bg-transparent border-b-2"
                                        placeholder="Last Name"
                                        required
                                   />
                                   <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="p-3 bg-transparent border-b-2"
                                        required
                                   />
                                   <input
                                        type="number"
                                        name="phone"
                                        value={data.phone}
                                        onChange={handleChange}
                                        className="p-3 bg-transparent border-b-2"
                                        placeholder="Phone Number"
                                        required
                                   />
                                   <input
                                        type="text"
                                        name="cardNumber"
                                        value={data.cardNumber}
                                        onChange={handleChange}
                                        className="p-3 bg-transparent border-b-2"
                                        placeholder="card Number"
                                        required
                                   />
                                   <input
                                        type="text"
                                        name="username"
                                        value={data.username}
                                        onChange={handleChange}
                                        className="p-3 bg-transparent border-b-2"
                                        placeholder="Username"
                                        required
                                   />
                                   <input
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        className="p-3 bg-transparent border-b-2"
                                        placeholder="Password"
                                        required
                                   />
                              </Box>
                              <div className=" grid grid-flow-row gap-2">
                                   <button variant="secondary" type="reset" className="">reset</button>
                                   <button variant="primary" type="submit" className="bg-primary rounded-xl p-2 w-1/3 mx-auto">Sign Up</button>
                              </div>
                         </Form>
                         <button type="button" className="flex justify-center items-center gap-2 mt-2 mx-auto p-2 px-4 bg-slate-400 rounded-3xl">continue with<FcGoogle size={18} /></button>
                         <p>Have an Account? <a href="/login" className="link-info">log in</a></p>
                   </div>
               </div>

        </div>
     );
};

export default Signup;
