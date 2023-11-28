import React,{useState} from 'react'
import Axios from 'axios'
import { Box,Typography,useTheme } from "@mui/material";
import { tokens } from "../../Contexts/theme";
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";

export default function AddStation({address}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const [data, setData] = useState({
        current:null,
        password:null,
        rePassword:null,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        try {

            if(data.password !== data.rePassword){
                setError("Please new passwords don't match");
                return setTimeout(()=>{
                    setError(null)
                  },1700)
            }     
            let token=localStorage.getItem('moveSmart_vpfancyadmin_token');
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await Axios.put(address, data);
            setResponse(response.data.message);
            token = response.data.token;
            localStorage.setItem('moveSmart_vpfancyadmin_token', token);
            setTimeout(()=>{
                window.location = "/vpadmin/station/profile";
             },800)
        } catch (error) {
            setError(error.response.data.message)
            setTimeout(()=>{
             setError(null)
            },1500)
        }
    };
    
  return (
    <Form  className='py-2' onSubmit={handleSubmit}>
                  {error&&<Alert variant="danger" className='text-xs my-2 mx-auto w-3/5'>{error}</Alert>}   
                  {response&&<Alert variant="success" className='text-xs my-2 mx-auto w-3/5'>{response}</Alert>}        
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
                  <label htmlhtmlFor="current" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    > <Typography>Current Password</Typography></label>
                  <input 
                  type='password' 
                  name="current" 
                  value={data.current}
                  onChange={handleChange}
                  id='current' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}} />
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
              <label htmlhtmlFor="password" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >New Password</label>
                  <input 
                  type='password' 
                  name="password" 
                  value={data.password}
                  id='password' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} />
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
                  <label htmlhtmlFor="rePassword" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Repeat New Password</label>
                  <input 
                  type='password' 
                  name="rePassword" 
                  value={data.rePassword}
                  onChange={handleChange}
                  id='rePassword' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1'
                  style={{borderColor:`${colors.grey[100]}`}} />
              </Box>
              <button type="submit" className='mx-auto p-2 px-5  rounded-md'  
              style={{backgroundColor:`${colors.blueAccent[500]}`}}>Change</button>
      </Form>
  )
}
