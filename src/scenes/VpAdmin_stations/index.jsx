import { Box,useTheme,Typography } from "@mui/material";
import { tokens } from "../../Contexts/theme";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import Header from "../global/Header";

import React,{useState,useEffect} from 'react'
import Axios from 'axios'

export default function Index() {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
    const columns=[
            {
                field: "name",
                headerName: "Station",
                flex: 1,
                cellClassName: "name-column--cell",
              },
              {
                field: "location",
                headerName: "Location",
                flex: 1,

              },
              {
                field: "numberOfDestinations",
                headerName: "No Destination",
                flex: 1,
              },
              {
                field: "delete",
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
                ),}
     
    ]
    const [data,setData]=useState([])
    const [error, setError] = useState('')
    useEffect(() => {
      async function fetchData() {
        try {
          const token =localStorage.getItem("moveSmart_vpfancyadmin_token");
          Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          
          const response = await Axios.get('http://localhost:3050/api/station');
          setData(response.data)
        } catch (error) {
            setError(error.response.data.message);
        }
      }
      fetchData()
    },[])

    function handleDelete(_id) {
      // Implement your delete logic here using the _id
      console.log(`Deleting object with _id: ${_id}`);
    }
    

  return (
    <Box>
      <Header title="STATIONS" subtitle="Managing the Stations" />
      {error&&<Typography variant="h5" className="text-red-500 font-medium text-center">
          {error}
      </Typography>}
      <Box
      height="75vh"
      className="mx-auto md:w-full sm:w-full w-[72vw] overflow-x-scroll p-3"
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
         <DataGrid checkboxSelection rows={data} columns={columns} components={{ Toolbar: GridToolbar }} className="md:w-full sm:w-full w-[600px] font-bold"/>
      </Box>
    </Box>
  )
}
