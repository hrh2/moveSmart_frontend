import React,{useState,useEffect} from 'react'
import { tokens } from "../../Contexts/theme";
import { Box,useTheme,Typography } from "@mui/material";
import Header from '../global/Header';
import background from '../../img/blob-haikei.svg'
import background2 from '../../img/blob-scatter-haikei.svg'
import {SiThemodelsresource,SiBrandfolder} from 'react-icons/si'
import {TbManualGearbox,TbDiscount2} from 'react-icons/tb'
import {FaUserTie} from 'react-icons/fa'
import {BsSpeedometer,BsFillFuelPumpFill} from "react-icons/bs"
import {IoIosColorPalette} from 'react-icons/io'
import {MdAttractions,MdPreview} from 'react-icons/md'
import {FcLike} from 'react-icons/fc'
import { Link, useParams } from 'react-router-dom';
import  Axios  from 'axios';
 

export default function CarDetails() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [imagesArray, setImages] = useState([]);
    const [currentImg,setCurrentImg] = useState(null);
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const {id} = useParams()

    useEffect(()=>{
      async function fetchData(){
        try{
          const token = await localStorage.getItem('moveSmart_client_token');
          Axios.defaults.headers.common.Authorization=`Bearer ${token}`;
          const response =await Axios.get(`https://movesmart.onrender.com/api/car/single/${id}`)
          setData(response.data);
          setImages(response.data.images);
          setCurrentImg(response.data.images[0])
        }catch(err){
          setError(err.response.data.message);
          setTimeout(()=>{
            setError(false)
          },2000)
        }
      }
      fetchData();
    },[id])

    function changeImage(index){
      setCurrentImg(imagesArray[index]);
    }
  return (
    <Box className='mx-0 max-w-full py-5 bg-cover bg-center' style={{background:`url(${background2})`}}>
      {error&&<Typography >
        {error}
      </Typography>}
      {Object.keys(data).length > 0 && (
      <>
      <Header title="Car Details" subtitle={`${data.name}`}/>
      <Box className="grid md:grid-flow-col gap-3 md:p-3 md:pr-10 p-2">
        <Box className="md:w-[60v] w-full">
          <Box className="mx-auto flex py-1 items-center justify-center gap-3">
            {imagesArray.map((image, i) =>(
              <Box key={i} className="md:w-[5rem] w-[3rem] rounded aspect-square bg-center bg-cover box-shadow" 
                   style={{backgroundImage:`url(${image})`}}
                   onClick={()=>changeImage(i)}
                   >
              </Box>
            ))}
          </Box>
          <img src={currentImg} alt='' className=' box-shadow rounded-xl mx-auto'/>
        </Box>
        <Box className="rounded-md max-h-[70vh] p-2 box-shadow md:w-4/5 w-full m-auto relative "  style={{background:`url(${background}) ${colors.primary[600]}`}}>
          <h2 className='h1 text-center md:relative bottom-[9rem]'>ALL Details </h2>
          <Box className="grid grid-flow-row gap-2  py-3 h-full w-5/6 font-semibold h2 mx-auto">
            <Box className="flex gap-4"><FaUserTie size={35}/>Personal</Box>
            <Box className="flex gap-4"><SiBrandfolder size={35}/>{data.brand}</Box>
            <Box className="flex gap-4"><SiThemodelsresource size={35}/>{data.specifications.model}</Box>
            <Box className="flex gap-4"><TbManualGearbox size={35}/>{data.specifications.isAutomatic?"Automatic":"Manual"}</Box>
            <Box className="flex gap-4"><BsSpeedometer size={35}/>{data.specifications.speed} MPH</Box>
            <Box className="flex gap-4"><IoIosColorPalette size={35}/>{data.specifications.color}</Box>
            <Box className="flex gap-4"><BsFillFuelPumpFill size={35}/> 1 l for {data.specifications.fuelkm} KM</Box>
            <Box className="flex gap-4"><MdAttractions size={35}/>{data.specifications.function}</Box>
            <Box className="flex gap-4"><TbDiscount2 size={35}/>{data.privileges.discounts[0].percentage}% {data.privileges.discounts[0].Details}</Box>
            <Box className="flex gap-4"><MdPreview size={35}/> {data.carViews.length}</Box>
            <Box className="flex gap-4"><FcLike size={35}/>{data.carLikes.length}</Box>
            <Box className="flex p-1 "> <Link className='w-4/6 mx-auto p-1 text-center rounded-md h4 bg-yellow-500' to={`/cars/single/${data._id}`}>Rent</Link> </Box>
          </Box>
        </Box>
      </Box>
      </>)}
    </Box>
  )
}