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
           
           const response = await Axios.get('https://movesmart.onrender.com/api/bus');
           setData(response.data)
         } catch (error) {
             setError(error.response.data.message);
         }
       }
       fetchData()
     },[])
     const columns = [
      {
        field: "plate",
        headerName: "Plate No",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "sits",
        headerName: "Total Sits",
        flex: 1,
      },
      {
        field: "destinationName",
        headerName: "Goes 📍",
        flex: 1,
      },
      {
        field: "price",
        headerName: "Price on Each",
        flex: 1,
      },
    ];
    const transformRows = data.map(bus => ({ id: bus._id, ...bus }));
  return (
    <Box className="md:w-5/6 mx-auto w-11/12">
      <Header
        title="BUSES"
        subtitle="List of All Buses"
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
         <DataGrid checkboxSelection rows={transformRows} columns={columns} components={{ Toolbar: GridToolbar }} className="md:w-full sm:w-full w-[600px] max-w-[1600px] "/>
      </Box>
    </Box>
  )
}
