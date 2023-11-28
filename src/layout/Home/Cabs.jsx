import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import CabsForm from '../../scenes/Cabs/Form'
import Header from '../../scenes/home/Header'
import Navbar from '../../scenes/home/Navbar'
import SimpleWhy from '../../scenes/Cabs/SimpleWhy'
import CabCompanies from "../../scenes/Cabs/CabCompanies"
import CoverageArea from '../../scenes/Cabs/RwandaMap'

export default function Cabs() {
  const [data,setData]=useState({})
    const [error, setError] = useState('')
    useEffect(() => {
      async function fetchData() {
        try {
          const token =localStorage.getItem("moveSmart_client_token");
          Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          const response = await Axios.get('http://localhost:3050/api/home');
          setData(response.data)
        } catch (error) {
            setError(error.response.data.message);
        }
      }
      fetchData()
    },[])
  return (
    <div className='grid gap-6'>
      <Header image={data.userImage} error={error}/>
      <Navbar tickets={data.tickets}/>
      <CabsForm/>
      <SimpleWhy />
      <CoverageArea/>
      <CabCompanies />
    </div>
  )
}
