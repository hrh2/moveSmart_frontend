import React,{useEffect, useState} from 'react'
import Axios from 'axios';
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../Contexts/theme";
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";
import { useParams } from 'react-router-dom';

export default function AddStation() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {id} = useParams();
    const token = localStorage.getItem('moveSmart_station_admin_token')
    const [cashier,setName] = useState("");
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState({
        cashierID: null,
        cashierName: null,
        phone: null,
        email: null,
        ground: null,
        adminadminPassword:null,
    });
    useEffect(()=>{
        async function fetchData(){
            try{
              Axios.defaults.headers.common.Authorization = `Bearer ${token}`
              const response = await Axios.get(`https://movesmart.onrender.com/api/cashier/${id}`);
              setData(response.data); 
              setName(response.data.cashierName);
           }catch(error){
              setError(error.response.data.message);
              setTimeout(()=>{
                  setError(null)
              },1500)
            }
        } 
        fetchData();
      },[id,token]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        try { 
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await Axios.put(`https://movesmart.onrender.com/api/cashier/${id}`, data);
            setMessage(response.data.message);
            
            setTimeout(()=>{
                window.location = "/admin/station/cashiers";
            },1600)
        } catch (error) {
            setError(error.response.data.message);
            setTimeout(()=>{
                setError(null)
            },1500)
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
        <Box className='text-center p-2 rounded-md md:w-4/5 mx-auto' m="20px" color={colors.grey[100]} backgroundColor={colors.primary[400]} >
            <h2 className='py-4 font-bold'>Edit For {cashier}</h2>
            <Box className='grid grid-flow-row gap-2'>
                {error && <Alert variant="danger" className='text-xs w-4/6 mx-auto'>{error}</Alert>}
                {message && <Alert variant="success" className='text-xs mx-auto'>{message}</Alert>}
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label htmlFor="cashierID" className='absolute top-[-0.5rem] left-4 px-2'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >The ID of Cashier</label>
                    <input 
                    type='text' 
                    name="cashierID" 
                    id='cashierID' 
                    className='w-full md:px-4 px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.cashierID}
                    onChange={handleChange} />
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label htmlFor="cashierName" className='absolute top-[-0.5rem] left-4 px-2'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Name</label>
                    <input 
                    type='text' 
                    name="cashierName" 
                    id='cashierName' 
                    className='w-full md:px-4 px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.cashierName}
                    onChange={handleChange} />
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label htmlFor="phone" className='absolute top-[-0.5rem] left-4 px-2'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Phone</label>
                    <input 
                    type='number' 
                    name="phone" 
                    id='phone' 
                    className='w-full md:px-4 px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.phone}
                    onChange={handleChange} />
                </Box>
                    <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label htmlFor="email" className='absolute top-[-0.5rem] left-4 px-2'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Email</label>
                        <input 
                        type='email' 
                        name="email" 
                        id='email' 
                        className='w-full md:px-4 px-3 h-full rounded-lg bg-transparent border-2'
                        style={{borderColor:`${colors.grey[100]}`}}
                        value={data.email}
                        onChange={handleChange} />
                    </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label htmlFor="ground" className='absolute top-[-0.5rem] left-4 px-2'
                     style={{backgroundColor:`${colors.primary[400]}`}}
                    >Working Ground</label>
                    <input 
                    type='text' 
                    name="ground" 
                    id='ground' 
                    placeholder='Remera Station'
                    className='w-full md:px-4 px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.ground}
                    onChange={handleChange} />
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label htmlFor="adminPassword" className='absolute top-[-0.5rem] left-4 px-2'
                     style={{backgroundColor:`${colors.primary[400]}`}}
                    >Confrim with Password</label>
                    <input 
                    type='password' 
                    name="adminPassword" 
                    id='adminPassword' 
                    placeholder='Admin Password****'
                    className='w-full md:px-4 px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.adminPassword}
                    onChange={handleChange} />
                </Box>
                    <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'
                    style={{backgroundColor:`${colors.blueAccent[500]}`}}>POST</button>
            </Box>
        </Box>
        </Form>
    )
}
