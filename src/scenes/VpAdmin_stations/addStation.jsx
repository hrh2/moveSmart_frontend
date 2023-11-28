import React,{useState} from 'react'
import Axios from 'axios'
import { Box,Typography,useTheme } from "@mui/material";
import { tokens } from "../../Contexts/theme";
import Dropzone from "react-dropzone";
import {FaPlus} from "react-icons/fa"
import {BiSolidUserCheck} from "react-icons/bi"
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";

export default function AddStation() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const [data, setData] = useState({
        adminID:"",
        adminName:"",
        adminPhoneNumber:null,
        adminEmail:"",
        adminPassword:null,
        name: '',
        commonName: '',
        location:'',
        stationDescription: '',
        images:[],
    });
    const [imageArray, setImageSrcArray] = useState([null, null, null,null]);
    const handleDrop = (index, acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const updatedArray = [...imageArray];
          updatedArray[index] = event.target.result;
          setImageSrcArray(updatedArray);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
      const renderImageUploader = (index) => {
        const divStyles = {
          backgroundImage: `url(${imageArray[index]})`,
        };
    
        return (
          <div key={index} className={`mx-auto  md:w-[7rem] w-[5rem] aspect-square`} >
            <Dropzone onDrop={(acceptedFiles) => handleDrop(index, acceptedFiles)} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="w-full h-full rounded-lg bg-cover bg-center bg-white text-center flex items-center"
                  style={divStyles}
                >
                  <input {...getInputProps()} />
                  {imageArray[index] ? null : (
                    <p className="text-black text-center w-full grid grid-flow-row">
                      <FaPlus size={25} className="mx-auto text-slate-500" />
                    </p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
        );
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        try {
            data.images=imageArray
            if(data.images.length<4 || data.images[0]==null || data.images[1]==null){
              return setError("Please fill the images as requested")
            }
            const token=localStorage.getItem('moveSmart_vpfancyadmin_token');
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await Axios.post('http://localhost:3050/api/station', data);
            setResponse(response.data.message);
            setTimeout(()=>{
                window.location = "/vpadmin/station/allStations";
                setResponse(false)
             },2000)
        } catch (error) {
            window.location ="#error"
            setError(error.response.data.message)
            setTimeout(()=>{
             setError(false)
            },5000)
        }
    };
    
  return (
    <Form  className='py-2' onSubmit={handleSubmit}>
      <Box className='text-center h-auto relative rounded-md py-3 mx-auto md:w-4/6 w-[90%]'  color={colors.grey[100]} backgroundColor={colors.primary[400]}>
          <h2 className='py-4 font-bold'>ADD new Station</h2>
          
          <Box className='grid grid-flow-row gap-2'>
                  {error&&<Alert variant="danger" id="error" className='text-xs mx-auto '>{error}</Alert>}
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
              <label htmlhtmlFor="name" className='absolute top-[-0.5rem] left-4 px-[.4rem] z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Name</label>
                  <input 
                  type='text' 
                  name="name" 
                  value={data.name}
                  id='name' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} required/>
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
              <label htmlhtmlFor="common" className='absolute top-[-0.5rem] left-4 px-[.4rem] z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Common known Name</label>
                  <input 
                  type='text' 
                  name="commonName" 
                  value={data.commonName}
                  id='common' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} required/>
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
                  <label htmlhtmlFor="location" className='absolute top-[-0.5rem] left-4 px-[.4rem] z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >location</label>
                  <input 
                  type='text' 
                  name="location" 
                  value={data.location}
                  onChange={handleChange}
                  id='location' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}} required/>
              </Box>
              <Box className="md:flex grid grid-cols-2 gap-2 p-4 md:w-4/6 mx-auto overflow-scroll">
                    {renderImageUploader(0)} {/* Render the second image as half */}
                    {renderImageUploader(1)} {/* Render the third image as half */}
                    {renderImageUploader(2)} {/* Render the third image as half */}
                    {renderImageUploader(3)} {/* Render the third image as half */}
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative my-3'>
              <label htmlhtmlFor="description" className='absolute top-[-0.5rem] left-4 px-[.4rem] z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Description</label>
                  <textarea 
                  type="text"
                  name="stationDescription"
                  value={data.stationDescription} 
                  onChange={handleChange}
                  rows="4" 
                  id='description' 
                  className='w-full rounded-lg bg-transparent  border-2 p-4'
                  style={{borderColor:`${colors.grey[100]}`}} required></textarea>
              </Box>
              <Box>
                 <Typography variant='h4'>
                  Admin Concerns
                 </Typography>
                 <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
              <label htmlhtmlFor="adminName" className='absolute top-[-0.5rem] left-4 px-[.4rem] z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Admin Name</label>
                  <input 
                  type='text' 
                  name="adminName" 
                  value={data.adminName}
                  id='adminName' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} required/>
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
              <label htmlhtmlFor="adminID" className='absolute top-[-0.5rem] left-4 px-[.4rem] z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Admin ID</label>
                  <input 
                  type='number' 
                  name="adminID" 
                  value={data.adminID}
                  id='adminID' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} required/>
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
                  <label htmlhtmlFor="adminPhoneNumber" className='absolute top-[-0.5rem] left-4 px-[.4rem] z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Admin Phone</label>
                  <input 
                  type='text' 
                  name="adminPhoneNumber" 
                  value={data.adminPhoneNumber}
                  onChange={handleChange}
                  id='adminPhoneNumber' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}} required/>
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
              <label htmlhtmlFor="adminEmail" className='absolute top-[-0.5rem] left-4 px-[.4rem] z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Admin Email</label>
                  <input 
                  type='text' 
                  name="adminEmail" 
                  value={data.adminEmail}
                  id='adminEmail' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} required/>
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
                  <label htmlhtmlFor="adminPassword" className='absolute top-[-0.5rem] left-4 px-[.4rem] z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Admin Password</label>
                  <input 
                  type='password' 
                  name="adminPassword" 
                  value={data.adminPassword}
                  onChange={handleChange}
                  id='adminPassword' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}} required/>
              </Box>
              </Box>
              <button type="submit" className='mx-auto p-2 px-5  rounded-md'  
              style={{backgroundColor:`${colors.blueAccent[500]}`}}>POST</button>
          </Box>
          {response&&<Typography className="flex text-green-500 font-medium">
            {response}<BiSolidUserCheck/>
          </Typography>}
      </Box>
      </Form>
  )
}
