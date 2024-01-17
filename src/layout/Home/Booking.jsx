import React, { useState,useEffect} from 'react';
import Axios from 'axios'

import Header from '../../scenes/home/Header.jsx';
import Navbar from '../../scenes/home/Navbar.jsx';
import BookForm from '../../scenes/home/BookingForm.jsx'
import EarnWithUs from '../../scenes/home/EarnWithUs.jsx';
import StationDescription from '../../scenes/home/StationDescription.jsx';
import BusOperators from '../../scenes/home/BusOperators.jsx';


const Home = () => {
     // eslint-disable-next-line
    const [data,setData]=useState({})
    const [error, setError] = useState('')
    useEffect(() => {
      async function fetchData() {
        try {
          const token =localStorage.getItem("moveSmart_client_token");
          Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          
          const response = await Axios.get('https://movesmart.onrender.com/api/home');
          setData(response.data)
        } catch (error) {
            setError(error.response.data.message);
          }
      }
      fetchData()
    },[])
    return (
        <div className=' min-h-screen w-full grid grid-flow-row gap-5'>
            <Header image={data.userImage} error={error}/>
            <Navbar tickets={data.tickets}/>
            <BookForm />
            <StationDescription/>
            <EarnWithUs/>
            <BusOperators/>
        </div>
    );
};

export default Home;
