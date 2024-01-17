import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import { Box,Typography,useTheme } from "@mui/material";
import { tokens } from "../../Contexts/theme";
import {FcKey} from "react-icons/fc"
import {TbUserEdit} from "react-icons/tb"
import PasswordUpdating from "../global/ChangingPassword"
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";

export default function AddStation() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [show,setShow] = useState(false);
    const [message , setMessage] = useState(null);

    function toggleChangingPassword(){
        setShow(!show)
    }
    
    const [error, setError] = useState('');
    const [data, setData] = useState({
        adminName:null,
        adminID:null,
        phone:null,
        email:null,
        password:null,
    });
    useEffect(() => {
        async function fetchData() {
          try {
            const token = await localStorage.getItem("moveSmart_vpfancyadmin_token");
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await Axios.get('https://movesmart.onrender.com/api/vpfancyadmin/personal');
            setData(response.data)
          } catch (error) {
              setError(error.response.data.message);
              setTimeout(()=>{
                setError(null)
               },1500)
          }
        }
        fetchData()
      }, [])
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        try {
            var token=localStorage.getItem('moveSmart_vpfancyadmin_token');
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await Axios.put('https://movesmart.onrender.com/api/vpfancyadmin/personal', data);
            token = response.data.token;
            localStorage.setItem('moveSmart_vpfancyadmin_token', token)
            setMessage(response.data.message);
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
      <Box className='text-center h-auto relative rounded-md py-3 mx-auto md:w-4/6 w-[90%]'  color={colors.grey[100]} backgroundColor={colors.primary[400]}>
                <Typography variant='h4' className=' font-bold py-4'>
                  {show?"Changing Password":"Update Admin Detatils"}
                 </Typography>
          <Box className='grid grid-flow-row gap-2'>
              <Box>
              {show?<PasswordUpdating address={"https://movesmart.onrender.com/api/vpfancyadmin/password"}/>:<Form  className='py-2' onSubmit={handleSubmit}> 
               {error&&<Alert variant="danger" className='text-xs mx-auto '>{error}</Alert>}
               {message&&<Alert variant="success" className='text-xs mx-auto '>{message}</Alert>}
                 <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
              <label htmlhtmlFor="adminName" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Admin Name</label>
                  <input 
                  type='text' 
                  name="adminName" 
                  value={data.adminName}
                  id='adminName' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1 text-center'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} />
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
              <label htmlhtmlFor="adminID" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Admin ID</label>
                  <input 
                  type='number' 
                  name="adminID" 
                  value={data.adminID}
                  id='adminID' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1 text-center'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} />
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
                  <label htmlhtmlFor="phone" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Admin Phone</label>
                  <input 
                  type='text' 
                  name="phone" 
                  value={data.phone}
                  onChange={handleChange}
                  id='phone' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1 text-center'
                  style={{borderColor:`${colors.grey[100]}`}} />
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
              <label htmlhtmlFor="email" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Admin Email</label>
                  <input 
                  type='text' 
                  name="email" 
                  value={data.email}
                  id='email' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1 text-center'
                  style={{borderColor:`${colors.grey[100]}`}}
                  onChange={handleChange} />
              </Box>
              <Box className=' mx-auto md:w-4/6 w-5/6 relative h-[3rem] my-3'>
                  <label htmlhtmlFor="password" className='absolute top-[-0.5rem] left-4 px-[.1rem]'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Confirm with Password</label>
                  <input 
                  type='password' 
                  name="password" 
                  value={data.password}
                  onChange={handleChange}
                  id='password' 
                  className='w-full h-full rounded-lg bg-transparent border-2 p-1 text-center'
                  style={{borderColor:`${colors.grey[100]}`}} />
              </Box>
                 <button type="submit" className='mx-auto p-2 px-5  rounded-md'  
                    style={{backgroundColor:`${colors.blueAccent[500]}`}}>Update</button>
              </Form>}
            </Box>
            <Box>
                <Typography className='p-2 cursor-pointer  text-green-600 flex justify-center' onClick={()=>toggleChangingPassword()}>
                    {show?
                    <span className='flex justify-center'><TbUserEdit size={23}/>Only Personal information</span>:
                    <span className='flex justify-center'><FcKey size={23}/>want to change Password</span>}
                </Typography>
            </Box>
          </Box>
      </Box>
  )
}
