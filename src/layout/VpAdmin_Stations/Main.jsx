import React, { useEffect,useState} from 'react';
import TopBar from '../../scenes/VpAdmin_stations/TopBar'
import SideBar from '../../scenes/VpAdmin_stations/SideBar';
import Footer from '../../components/Footer'
// eslint-disable-next-line 
import { useLocation,Outlet } from "react-router-dom";
import Axios from 'axios'


export default function Main() {
  // eslint-disable-next-line 
  const [isSidebar, setIsSidebar] = useState(true);
  // eslint-disable-next-line 
  const [data, setData] = useState({})
  // eslint-disable-next-line 
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
