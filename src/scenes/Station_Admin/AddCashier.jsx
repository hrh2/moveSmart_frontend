import React,{useState} from 'react'
import Axios from 'axios';
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../Contexts/theme";
// eslint-disable-next-line 
import { Form, Alert } from "react-bootstrap";

export default function AddStation() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState({
        cashierID: null,
        cashierName: null,
        phone: null,
        email: null,
        password:null,
        repassword:null,
        ground: null,
    });

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        try { 
            if(data.password !== data.repassword){
                setError("Please enter matching Password with the retype password");
                return setTimeout(()=>{
                    setError(null);
                },1300)
            } 
            const token = localStorage.getItem('moveSmart_station_admin_token')
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await Axios.post('http://localhost:3050/api/user/cashier', data);
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
            <h2 className='py-4 font-bold'>Add a Cashier</h2>
            <Box className='grid grid-flow-row gap-2'>
                {error && <Alert variant="danger" className='text-xs w-4/6 mx-auto'>{error}</Alert>}
                {message && <Alert variant="success" className='text-xs mx-auto'>{message}</Alert>}
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label htmlFor="cashierID" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
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
                <label htmlFor="cashierName" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
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
                <label htmlFor="phone" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
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
                    <label htmlFor="email" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
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
                    <label htmlFor="password" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
                     style={{backgroundColor:`${colors.primary[400]}`}}
                    >Cashier Password</label>
                    <input 
                    type='password' 
                    name="password" 
                    id='password' 
                    placeholder='******'
                    className='w-full md:px-4 px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.password}
                    onChange={handleChange} />
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label htmlFor="repassword" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
                     style={{backgroundColor:`${colors.primary[400]}`}}
                    >Retype Cashier Password</label>
                    <input 
                    type='password' 
                    name="repassword" 
                    id='repassword' 
                    placeholder='*****'
                    className='w-full md:px-4 px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.repassword}
                    onChange={handleChange} />
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label htmlFor="ground" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
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
                    <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'
                    style={{backgroundColor:`${colors.blueAccent[500]}`}}>POST</button>
            </Box>
        </Box>
        </Form>
    )
}
