import React, { useEffect,useState} from 'react';
import TopBar from '../../scenes/VpAdmin_stations/TopBar'
import SideBar from '../../scenes/Station_Admin/SideBar';
import Footer from '../../components/Footer'
// eslint-disable-next-line 
import { useLocation,Outlet } from "react-router-dom";
import Axios from 'axios'


export default function Main() {
  // eslint-disable-next-line 
  const [isSidebar, setIsSidebar] = useState(true);
  // eslint-disable-next-line 
  // eslint-disable-next-line 
  const [error, setError] = useState('')

  
  return (
    <div>
   <div className='app'>
    <SideBar isSidebar={isSidebar}/>
      <main className='content overflow-x-hidden'>
      <TopBar setIsSidebar={setIsSidebar} />
      <Outlet/>
      </main>
   </div>
   <Footer/>
   </div>
  )
}
