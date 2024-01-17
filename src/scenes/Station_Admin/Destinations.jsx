import { Box,useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../Contexts/theme";
import Header from "../global/Header";

import React,{useState,useEffect} from 'react'
import Axios from 'axios'

export default function Index() {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     const [data,setData]=useState([])
     const [error, setError] = useState('')
     useEffect(() => {
       async function fetchData() {
         try {
           const token =localStorage.getItem("moveSmart_station_admin_token");
           Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
           const response = await Axios.get('https://movesmart.onrender.com/api/station//destinations');
           setData(response.data)
         } catch (error) {
             setError(error.response.data.message);
         }
       }
       fetchData()
     },[])
     const columns = [
      {
        field: "StationName",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "numberOfBuses",
        headerName: "Total Buses",
        flex: 1,
      }
    ];
  return (
    <Box className="md:w-5/6 mx-auto w-11/12">
      <Header
        title="Routes"
        subtitle="List of linked Stations"
      />
      {error&&<p className=" text-red-500">{error}</p>}
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
         <DataGrid checkboxSelection rows={data} columns={columns} components={{ Toolbar: GridToolbar }} className="md:w-full sm:w-full w-[600px] max-w-[1600px] "/>
      </Box>
    </Box>
  )
}
