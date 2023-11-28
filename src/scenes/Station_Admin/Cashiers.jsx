import { Box,useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../Contexts/theme";
import Header from "../global/Header";

import React,{useState,useEffect} from 'react'
import Axios from 'axios'

export default function Index() {
     const token =localStorage.getItem("moveSmart_station_admin_token");
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     const [data,setData]=useState([]);
     const [error, setError] = useState('');
     const [message, setMessage] = useState('');

     useEffect(() => {
       async function fetchData() {
         try {
           
           Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
           
           const response = await Axios.get('http://localhost:3050/api/cashier');
           setData(response.data)
         } catch (error) {
             setError(error.response.data.message);
         }
       }
       fetchData()
     },[token])
     const columns = [
      {
        field: "cashierName",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
      },
      {
        field: "ground",
        headerName: "Work in 📍",
        flex: 1,
      },
      {
        field: "Delete",
        headerName: "Action",
        sortable: false,
        filterable: false,
        width: 100,
        cellClassName:"text-red-500",
        renderCell: (params) => (
          <button
            onClick={() => handleDelete(params.row._id)}
            className=" font-extrabold"
          >
            Delete
          </button>
        ),},
        {
          field: "Update",
          headerName: "Action",
          sortable: false,
          filterable: false,
          width: 100,
          cellClassName:"text-yellow-500",
          renderCell: (params) => (
            <button
              onClick={() => handleUpdate(params.row._id)}
              className=" font-extrabold"
            >
              Update
            </button>
          ),}

    ];
    const handleDelete =async (id)=>{
      try { 
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.delete(`http://localhost:3050/api/cashier/${id}`);
        setMessage(response.data.message);
        setTimeout(()=>{
           return window.location = "/admin/station/cashiers";
        },1600)
    } catch (error) {
        setError(error.response.data.message);
        setTimeout(()=>{
            setError(null)
        },1500)
    }
    }

    const handleUpdate= (id) => {
     return  window.location = `/admin/station/cashier/edit/${id}`;
    }

    const transformedData = data.map(cashier => ({ id: cashier._id, ...cashier }));
  return (
    <Box className="md:w-5/6 mx-auto w-11/12">
      <Header
        title="CASHIERS"
        subtitle="List of All cashiers the stion has"
      />
      {error&&<p className=" text-red-500">{error}</p>}
      {message&&<p className=" text-green-500">{message}</p>}
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
         <DataGrid checkboxSelection rows={transformedData} columns={columns} components={{ Toolbar: GridToolbar }} className="md:w-full sm:w-full w-[600px] max-w-[1600px] "/>
      </Box>
    </Box>
  )
}
