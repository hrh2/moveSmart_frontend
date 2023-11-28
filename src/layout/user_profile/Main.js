import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Profile from '../../components/profile_discription'

export default function Main() {
  // eslint-disable-next-line 
  const [data, setData] = useState({})
  // eslint-disable-next-line 
  const [error, setError] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        const token =await localStorage.getItem("moveSmart_client_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get('http://localhost:3050/api/home');
        setData(response.data)
      } catch (error) {
          setError(error.response.data.message);
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <div className='container-fluid p-0 bg-transparent'>
        <div>
          <Profile/>
        </div>
      </div>
    </div>
  )
}
