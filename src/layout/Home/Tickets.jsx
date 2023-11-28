import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import TicketCard from './ticketCard'
import { FaHistory} from 'react-icons/fa'
import { useTicketContext } from '../../Contexts/tickets';
import { Typography,useTheme ,Box} from '@mui/material';
import { tokens } from '../../Contexts/theme';
export default function Tickets() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {showTicket } = useTicketContext();
    const [error,setError] = useState(false);
    const [used,setUsed] = useState([]);
    const [unUsed,setUnUsed] = useState([]);
    const [suspended,setSuspended] = useState([]);
    const [showUsedTickets, setShowUsedTickets] = useState(false);
    const [showUnUsedTickets, setShowUnUsedTickets] = useState(true);
    const [showSuspended, setShowSuspended] = useState(false);
    // eslint-disable-next-line
    const toggleUsed = () => {
        setShowUsedTickets(true)
        setShowSuspended(false)
        setShowUnUsedTickets(false)
    };
    const toggleUnUsed = () => {
        setShowUsedTickets(false)
        setShowSuspended(false)
        setShowUnUsedTickets(true)
    };
    const toggleSuspended = () => {
        setShowUsedTickets(false)
        setShowSuspended(true)
        setShowUnUsedTickets(false)
    }
   useEffect(() => {
    async function fetchData() {
      try {
        const token =localStorage.getItem("moveSmart_client_token");
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get('http://localhost:3050/api/tickets');
        setUsed(response.data.usedTickets)
        setSuspended(response.data.suspendedTickets)
        setUnUsed(response.data.unUsedTickets)
      } catch (error) {
          setError(error.response.data.message);
      }
    }
    fetchData()
  },[])

  return (
    <Box className='h-screen w-full bg-[#0F172A] bg-opacity-70 fixed top-0 left-0 flex justify-center items-center z-30'>
        <button onClick={showTicket.toggleShowTicket} type="" className='w-[2rem] h-[2rem] text-center font-extrabold absolute top-2 right-5 rounded-full md:bg-yellow-500 bg-slate-600 aspect-square'>x</button>
        <Box className={`w-full h-screen overflow-y-scroll md:h-auto sm:h-auto md:w-2/5 sm:w-3/5  rounded-lg p-1 box-shadow`} style={{backgroundColor:colors.primary[400]}}>
            <Box>
                <Typography variant='h2' className='font-bold text-center py-2 '>Booked Tickets</Typography>
            </Box>
            <Typography>
                <Box className='grid grid-cols-3  mt-2 font-semibold p-1'>
                    <button type="" className={`p-2 hover:bg-green-100 hover:text-black rounded-lg ${showUnUsedTickets?'bg-green-700':''} `} onClick={toggleUnUsed}>UnUsed</button>
                    <button type="" className={`p-2 hover:bg-green-100 hover:text-black rounded-lg ${showUsedTickets?'bg-green-700':''} `} onClick={toggleUsed}>Used</button>
                    <button type="" className={`p-2 hover:bg-green-100 hover:text-black rounded-lg ${showSuspended?'bg-green-700':''} `} onClick={toggleSuspended}>Suspended</button>
                </Box>
            </Typography>
            {showUsedTickets&&<Box className='grid grid-flow-row p-2 border-t-2 gap-2'>
                    {used.map(ticket=>(
                        <TicketCard key={ticket._id} used={true} suspended={false} ticket={ticket}/>
                    ))}
                    {used.length<1?<Typography className='p-2 text-center font-semibold'>None</Typography>:""}
            </Box>}
              {showUnUsedTickets && <Box className='grid grid-flow-row p-2 border-t-2 gap-2'>
                    {unUsed.map(ticket=>(
                        <TicketCard key={ticket._id} used={false} suspended={false} ticket={ticket}/>
                    ))}
                    {unUsed.length<1?<Typography className='p-2 text-center font-semibold'>None<br/>No used ticket in Records</Typography>:""}
              </Box>}
              {showSuspended && <Box className='grid grid-flow-row p-2 border-t-2 gap-2'>
                {suspended.map(ticket=>(
                     <TicketCard key={ticket._id} used={false} suspended={true} ticket={ticket}/>
                    ))}
                {suspended.length<1?<Typography className='p-2 text-center font-semibold'>None .<br/> plase maintain Time to prevent Suspansion</Typography>:""}
              </Box>}
              {error&&<Typography variant='h6' className='text-red-500 font-medium'>{error}</Typography>}
              {!unUsed&&<Box className="w-4/5 flex flex-column justify-content-center align-items-center py-5">
                  <p className=" font-extralight text-center italic">
                      <FaHistory size={20} />
                      <span className="text-muted">
                          your car booking history will be displayed here.
                      </span>
                  </p>
              </Box>}
        </Box>
    </Box>
  )
}
