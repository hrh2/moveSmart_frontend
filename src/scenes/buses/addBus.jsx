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
        plate: '',
        price: '',
        sits: '',
        time: '',
        direction:'',
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
            const token = localStorage.getItem('moveSmart_station_admin_token')
            Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await Axios.post('https://movesmart.onrender.com/api/bus', data);
            setMessage(response.data.messag);
            setTimeout(()=>{
                window.location = "/admin/station/";
            },1200)
        } catch (error) {
            
                setError(error.response.data.message);
                setTimeout(()=>{
                    setError(null);
                },1700)
        }
    };
    return (
        <Form onSubmit={handleSubmit}>
        <Box className='text-center p-2 rounded-md md:w-4/5 mx-auto' color={colors.grey[100]} backgroundColor={colors.primary[400]} >
            <h2 className='py-4 font-bold'>Add a Bus</h2>
            <Box className='grid grid-flow-row gap-2'>
                {error && <Alert variant="danger" className='text-xs w-4/6 mx-auto'>{error}</Alert>}
                {message && <Alert variant="success" className='text-xs'>{message}</Alert>}
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label htmlFor="plate" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Plate No</label>
                    <input 
                    type='text' 
                    name="plate" 
                    id='plate' 
                    className='w-full px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.plate}
                    onChange={handleChange} />
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label htmlFor="price" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Price</label>
                    <input 
                    type='number' 
                    name="price" 
                    id='price' 
                    className='w-full px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.price}
                    onChange={handleChange} />
                </Box>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                <label htmlFor="sits" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Exposed Sits</label>
                    <input 
                    type='number' 
                    name="sits" 
                    id='sits' 
                    className='w-full px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.sits}
                    onChange={handleChange} />
                </Box>
                    <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label htmlFor="time" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
                    style={{backgroundColor:`${colors.primary[400]}`}}
                    >Normal starting time</label>
                        <input 
                        type='time' 
                        name="time" 
                        id='time' 
                        className='w-full px-3 h-full rounded-lg bg-transparent border-2'
                        style={{borderColor:`${colors.grey[100]}`}}
                        value={data.time}
                        onChange={handleChange} />
                    </Box>
                <h4 className=' text-xs'>Destination (Operation stations)</h4>
                <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                    <label htmlFor="direction" className='absolute top-[-0.5rem] left-4 px-3 z-10 rounded'
                     style={{backgroundColor:`${colors.primary[400]}`}}
                    >Destination Name</label>
                    <input 
                    type='text' 
                    name="direction" 
                    id='direction' 
                    placeholder='To  :'
                    className='w-full px-3 h-full rounded-lg bg-transparent border-2'
                    style={{borderColor:`${colors.grey[100]}`}}
                    value={data.direction}
                    onChange={handleChange} />
                </Box>
                    <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'
                    style={{backgroundColor:`${colors.blueAccent[500]}`}}>POST</button>
            </Box>
        </Box>
        </Form>
    )
}
