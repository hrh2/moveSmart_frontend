import React, {useState} from 'react';
import TopBar from '../../scenes/VpAdmin_stations/TopBar'
import SideBar from '../../scenes/Cashier/SideBar';
import Footer from '../../components/Footer'
// eslint-disable-next-line 
import { useLocation,Outlet } from "react-router-dom";


export default function Main() {
  // eslint-disable-next-line 
  const [isSidebar, setIsSidebar] = useState(true);
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
