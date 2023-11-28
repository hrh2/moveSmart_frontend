import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer"
const Home = () => {
     return (
        <div className=' overflow-x-hidden'>
            <Outlet/>
            <Footer/>
        </div>
     );
};

export default Home;
