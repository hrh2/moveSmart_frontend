import React,{ useRef, useEffect, useState } from 'react'
import { Box,useTheme } from '@mui/material'
import { tokens } from '../../Contexts/theme'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlyd2EyIiwiYSI6ImNsbWpiYnR4ZjAyMTkyc28zY3VqZG1oeDYifQ.OLNoarmycQ1I1YpZTfBF5w';

export default function RwandaMap() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(30.1119 );
  const [lat, setLat] = useState(-1.9432);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <Box className='w-[100vw] px-2'>
      <h1 className=' text-center w-full text-2xl font-bold'>Coverage</h1>
      <Box className="overflow-x-scroll w-[100%]">
      <Box className='md:w-4/5 sm:w-5/6 w-11/12 h-[40vh] box-shadow rounded-md border-2 mx-auto min-w-[350px] relative' backgroundColor={colors.primary[600]}>
      <div className="map-sidebar z-10">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container h-full w-full" />
      </Box>
      </Box>
    </Box>
  )
}
