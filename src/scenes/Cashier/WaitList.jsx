import React,{useState,useEffect} from 'react'
import {BiSolidCheckboxChecked} from 'react-icons/bi'
import { Box,Typography,useTheme } from "@mui/material";
import { tokens } from "../../Contexts/theme";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import Header from "../global/Header";
import Axios from 'axios'

export default function Index() {
    const token =localStorage.getItem("moveSmart_station_cashier_token");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [title,setTitle] = useState('')
    const [ground,setGround] = useState('')
    const [data,setData]=useState([])
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    // 
    async function updateGivenTickets(id){
      try{
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get(`https://movesmart.onrender.com/api/tickets/manage/gave-ticket/${id}`);
        setMessage(response.data.message)
          setTimeout(()=>{
              setMessage(null)
              fetchData()
          },1000)
      }catch(error){
        setError(error.response.data.message);
        setTimeout(()=>{
            setError(null)
        },1000)
      }
    }
    // 
    async function fetchData() {
      try {
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.get('https://movesmart.onrender.com/api/tickets/manage');
        setData(response.data.tickets)
        setTitle(response.data.name)
        setGround(response.data.ground)
      } catch (error) {
          setError(error.response.data.message);
          setTimeout(()=>{
              setError(null)
          },1000)
      }
    }
    // 
    useEffect(() => {
       fetchData()
        // eslint-disable-next-line
    },[])
    //  Formatting data to have id
    const transformedData = data.map(tickets => ({ id: tickets._id, ...tickets }));
    // Columns to be rendered
    const columns=[
      {
          field: "ownerName",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "to",
          headerName: "Destination",
          flex: 1,
        },
        {
          field: "sits",
          headerName: "Sits",
          flex: 1,
        },
        {
          field: "time",
          headerName: "Time",
          flex: 1,
        },
        {
          field: "Give",
          headerName: "Give Tickets",
          sortable: false,
          filterable: false,
          width: 100,
          cellClassName:"text-green-500",
          renderCell: (params) => (
            <>
            {!params.row.isGiven?<button
              onClick={() => updateGivenTickets(params.row._id)}
              className=""
            >
              <BiSolidCheckboxChecked size={40}/>
            </button>:"Given"}
            </>
          ),}
]
  return (
    <Box m="20px" >
      <Header title={`${title} to ${ground}`} subtitle="Waitlist" />
      {error&&<Box className="text-center text-red-600 font-medium">
        {error}
      </Box>}
      {message&&<Box className=" font-bold text-green-600 text-base absolute bg-blue-950 p-3 rounded top-[50%] left-[45%] z-30">
        <Typography className=" text-center">
          {message}
        </Typography>
      </Box>}
      <Box
      m="40px 0 0 0"
      height="75vh"
      className="mx-auto md:w-full sm:w-full w-[72vw] overflow-x-scroll"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
      }}>
         <DataGrid 
         checkboxSelection 
         rows={transformedData} 
         columns={columns} 
         slots={{ Toolbar: GridToolbar }} 
         initialState={{
          sorting: {
            sortModel: [{ field: 'time', sort: 'asc' }],
          },
          // pagination: { paginationModel: { pageSize: 30 } },
        }}
         className="md:w-full sm:w-full w-[600px]"/>
      </Box>
    </Box>
  )
}
