import React,{useState,useEffect} from 'react'
import { Typography } from '@mui/material';
import Axios from 'axios';


export default function Profile_discription() {
  // eslint-disable-next-line
  const [data, setData] = useState({})
  const [location,setLocation] = useState('')
  const [country,setCountry] = useState('')
  const [region,setRegion] = useState('')
  const weatherkey ="5b732fb231c14d57a82150342240302"
  // eslint-disable-next-line 
  const [error, setError] = useState('')
  useEffect(() => {
    async function fetchData() {
      try {
        // await removeToken('moveSmart_client_token');
        const token =await localStorage.getItem("moveSmart_client_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get('https://movesmart.onrender.com/api/profile');
        navigator.geolocation.getCurrentPosition(getLocation,failedLocation)
        setData(response.data)
      } catch (error) {
          setError(error.response.data.message);
      }
    }
    fetchData()
   // eslint-disable-next-line 
  }, [])
  
  async function getLocation(position){
   const location= await getLocationCity(position.coords.latitude,position.coords.longitude);
   console.log(location)
   setLocation(location.location.name)
   setCountry(location.location.country)
   setRegion(location.location.region)

  }
  function failedLocation(){
  console.log('you refused to get location')
  }
  
  async function getLocationCity(lat,long){
   const promise= await Axios.get(`http://api.weatherapi.com/v1/current.json?key=${weatherkey}&q=${lat},${long}&aqi=yes`)
   return await promise.json()
  }
  // eslint-disable-next-line
  async function removeToken(tokenKey) {
    await localStorage.removeItem(tokenKey);
  }
  return (
      <main className="profile-page relative">
      <section className="relative block h-[500px]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url('https://img.wallpapic.com/i4940-037-611/medium/art-digital-abstract-blue-wallpaper.jpg')`,
          }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
      </section>
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            {/* Rest of the code remains unchanged */}
            <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src={data.image} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <a href='f' className="bg-blue-500 active:bg-blue-950 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Edit
                </a>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">-</span><span className="text-sm text-gray-400">-</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">-</span><span className="text-sm text-gray-400">-</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">-</span><span className="text-sm text-gray-400">-</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-700">
              {data.firstName} {data.lastName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
             {location},{region},{country}
            </div>
            <div className="mb-2 text-gray-600">
              University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-gray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                <Typography>
                {data.email}
                </Typography>
                <Typography>
                {data.phone}
                </Typography>
                <Typography>
                Card: {data.cardNumber}
                </Typography>
                </p>
                <a href="#pablo" className="font-normal text-blue-500">Show more</a>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-gray-500 font-semibold py-1">
                  MoveSmart<a href="https://move-smart-frontend.vercel.app" className="text-gray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer">_</a> by <a href="https://move-smart-frontend.vercel.app" className="text-gray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer">Creative</a>.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
