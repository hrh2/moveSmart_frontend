// eslint-disable-next-line 
import React,{ useState, useEffect } from 'react';
import {Box,useTheme} from '@mui/material'
import { tokens } from '../../Contexts/theme';
import {BiSolidBrush} from 'react-icons/bi'

// eslint-disable-next-line 
import Axios from 'axios'
import { CgArrowsExchange } from 'react-icons/cg';
// eslint-disable-next-line 
import { AiTwotoneCalendar } from 'react-icons/ai';
// eslint-disable-next-line 
import AvailableTickets from './AvailableTickets';
import Loader from '../../components/Loader'

function MyForm() {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     const [routes, setRoutes] = useState([]);
     const [searchTerm, setSearchTerm] = useState('');
     const [suggester, setSuggester] = useState(false);
     const [rotated, setRotated] = useState(false);
     const [error, setError] = useState('');
     const [availableTickets, setAvailableTickets] = useState([]);
     const [trueReponse, setResponse] = useState(false);
     const [loading, setLoading] = useState(false);
     const [data,setData] = useState({
          from:"",
          to:"",
          date:"",
     })

     const handleFromSearch  = (e)=>{
          const {value} = e.target;
          setSearchTerm(value)
          setSuggester(true)
     } 
     const handleChange = (event) => {
          const { name, value } = event.target;
          setData((prevData) => ({ ...prevData, [name]: value }));
     };
     const matchingRoute =routes.filter((route)=>
          route.from.includes(searchTerm.toUpperCase())
     )
     const handleSelectedRoute = (route) => {
          setSuggester(false)
          const { from, to } = route;
          setData((prev) => ({ ...prev, from, to }));
        };
        const handleClear = () => {
          setData((prev) => ({
            ...prev,
            date: "",
            from: "",
            to: "",
          }));
          setSearchTerm("");
        };
        
        const handleReverse = () => {
          setRotated(!rotated);
          if(data.from&&data.to) {
          setData((prev) => ({...prev, from:data.to, to:data.from}))
          }
        };

        const token =localStorage.getItem("moveSmart_client_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        useEffect(() => {
          async function fetchData() {
            try {
              const response = await Axios.get('https://movesmart.onrender.com/api/book');
              setRoutes(response.data)
            } catch (error) {
                setError(error.response.data.message);
              }
          }
          fetchData()
        },[])
        const handleSubmit = async (event)=>{
          event.preventDefault(); // prevent the default form submission behavior
          try {
               setLoading(true)
               const response = await Axios.post('https://movesmart.onrender.com/api/book/available', data);
               setAvailableTickets(response.data);
               setTimeout(()=>{
                    setLoading(false)
               },500)
               setResponse(true);
          } catch (error) {
               setError(error.response.data.message);
               setTimeout(()=>{
                    setLoading(false)
                    setError(false);
               },500)
          }
     }

     return (
          <Box className='md:w-4/6 sm:w-5/6 w-11/12 mx-auto px-4 rounded-lg box-shadow' backgroundColor={colors.primary[400]} >
               <form className="" onSubmit={handleSubmit}>
                    <Box className="items-center relative">
                         <h2 className='text-white font-bold pt-3 pb-2  px-2 text-[.5em] sm:text-[.8em] md:text-[1.245em] relative'>Search Ticket for Your Journey</h2>
                         {error&&<p>{error}</p>}
                         <Box className='grid md:grid-flow-col gap-1 sm:grid-flow-col relative'>
                              <Box className="input-group p-0 m-0">
                              <input
                                     type="text"
                                     className="form-control border-end-0 p-3 text-center h-full "
                                     aria-label="from"
                                     placeholder="from : "
                                     value={data.from||searchTerm}
                                     onChange={handleFromSearch}
                                     required
                                   />
                                   <p className='input-group-text border-0 p-0 px-2 m-0 bg-white'>
                                        <CgArrowsExchange size={35} className={`aspect-square active:transform rounded-full hover:shadow-md box-shadow duration-500 ${rotated ? 'rotate-180' : ''}`} onClick={handleReverse} />
                                   </p>
                                   <input
                                        type="text"
                                        className="form-control border-start-0 text-center h-full"
                                        aria-label="Server"
                                        onChange={handleChange}
                                        value={data.to}
                                        placeholder="to"
                                        required />
                              </Box>
                              <Box className=' w-full'>
                                   <input
                                        type="Date"
                                        name='date'
                                        className="form-control border-end-0 h-full text-center"
                                        aria-label=""
                                        min="2023-10-01" 
                                        max="2023-10-31"
                                        onChange={handleChange}
                                        placeholder="Date"
                                        required />
                              </Box>

                         </Box>
                         <BiSolidBrush onClick={handleClear} size={27} className='absolute z-20 transform rotate-90 md:top-18 top-12 text-red-500 cursor-pointer'/>
                         <Box className="flex flex-column items-center my-3 text-white relative">
                              <button
                                   type="submit"
                                   className="border-0 bg-blue-900 px-5 py-2 rounded-3xl">
                                   Search
                              </button>
                         </Box>
                         <Box className="relative md:bottom-16 sm:bottom-16 bottom-28  px-3 bg-white text-black rounded-b-md">
                         {suggester&&<ul className='py-3'>
                         
                              {matchingRoute.length!==0?matchingRoute.map((item,i) => (
                                   <li key={i} className=' cursor-pointer' onClick={()=>handleSelectedRoute(item)}>{item.from} - {item.to}</li>
                              )):
                              <Box className=" font-semibold">
                                   No station called :<span className='text-red-500 font-bold'>{searchTerm}</span> 
                                   <p className='text-yellow-600'>so please try another name of your station or check &nbsp; 
                                        <a href='#accessibleRoute' className='text-blue-700 underline'> accessible routes</a> 
                                   </p>
                               </Box>}
                         </ul>}
                         </Box>
                    </Box>
               </form>
               {loading&&<Loader/>}
               {trueReponse&& !loading ?<AvailableTickets data={availableTickets} from={data.from} to={data.to} />:""}
          </Box>
     );

}
export default MyForm;
