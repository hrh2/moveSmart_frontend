import React from 'react';
import { Box, useTheme } from "@mui/material";
import { FaBus } from "react-icons/fa";
import { tokens } from "../../Contexts/theme";

export default function StationDescription({ name, stations, links }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Filter linked stations
  const linkedStations = stations.filter(station => links.includes(station._id));

  return (
    <Box className='flex gap-2'>
      <FaBus />
      <Box>
        <h1>{name}</h1>
        {linkedStations.length > 0 ? (
          <p className='px-4'>To: {linkedStations.map(station => station.name).join(', ')}</p>
        ) : (
          <p className='px-4' style={{color:colors.grey[100]}}>No linked stations</p>
        )}
      </Box>
    </Box>
  );
}
