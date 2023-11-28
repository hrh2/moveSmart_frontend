import React,{useState} from 'react'
import Axios from 'axios';
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../Contexts/theme";
import Dropzone from "react-dropzone";
import { FaPlus } from "react-icons/fa";
import {Typography} from '@mui/material';



export default function Form() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState({
        name: '',
        brand:'',
        plate:'',
        company:'',
        tyres: '',
        seats:'',
        price:0,
        color:'',
        use:'',
        model:'',
        speed:'',
        fuelkm:0,
        location:'',
        descriptions: '',
        discountValue:0,
        discountDesc:'',
        isAutomatic:false,
        isDriverProvided:false,
        street:null,
        images:[],
    });

  const [imageArray, setImageArray] = useState([null, null, null,null, null]);

  const handleDrop = (index, acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const updatedArray = [...imageArray];
      updatedArray[index] = event.target.result;
      setImageArray(updatedArray);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

 

  const renderImageUploader = (index) => {
    const divStyles = {
      backgroundImage: `url(${imageArray[index]})`,
    };

    return (
      <div key={index} className={`mx-auto  w-[80%] aspect-square`} >
        <Dropzone onDrop={(acceptedFiles) => handleDrop(index, acceptedFiles)} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="w-full h-full rounded-lg bg-cover bg-center bg-white text-center flex items-center"
              style={divStyles}
            >
              <input {...getInputProps()} />
              {imageArray[index] ? null : (
                <p className="text-black text-center w-full grid grid-flow-row">
                  <FaPlus size={25} className="mx-auto text-slate-500" />
                </p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
};

const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    try {
        data.images=imageArray
        const token=localStorage.getItem('moveSmart_client_token');
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await Axios.post('http://localhost:3050/api/car', data);
        setMessage(response.data.msg)
        setTimeout(()=>{
            setMessage(false)
        },1000)
         window.location = "/cars/mine";
    } catch (error) {
        setError(error.response.data.msg);
        setTimeout(()=>{
          setError(false)
        },2000)
    }
};

  return (
      <form className='w-full h-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 text-teal-50 md:text-base sm:text-sm text-xs ' onSubmit={handleSubmit}>
        <Box className='border-white md:border-r-2 sm:border-r-2 py-4 px-3 h-full' >
              <Box className=' grid md:grid-cols-2 grid-cols-1  gap-3 p-4'>
                {renderImageUploader(0)} {/* Render the first image as big */}
                <div className="grid grid-cols-2 gap-2">
                    {renderImageUploader(1)} {/* Render the second image as half */}
                    {renderImageUploader(2)} {/* Render the third image as half */}
                    {renderImageUploader(3)} {/* Render the third image as half */}
                    {renderImageUploader(4)} {/* Render the third image as half */}
                </div>
              </Box>
              <Box className='text-center py-4 rounded-lg' backgroundColor={colors.primary[400]}>
                  <h2 className='py-4 font-bold'>SPECIFICATION</h2>
                  <Box className='grid grid-flow-row gap-2'>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlFor="name" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Name</label>
                          <input type='text' name="name" id='name' className='w-full h-full rounded-lg bg-transparent border-2' onChange={handleChange} />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlFor="tyre" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Tyres</label>
                          <input type='number' name="tyres" id='tyre' className='w-full h-full rounded-lg bg-transparent border-2' onChange={handleChange} />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlFor="speed" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Speed MPH</label>
                          <input type='number' name="speed" id='speed' className='w-full h-full rounded-lg bg-transparent border-2' onChange={handleChange} />
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlFor="seats" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Seats</label>
                          <input type='number' name="seats" id='seats' className='w-full h-full rounded-lg bg-transparent border-2' onChange={handleChange}/>
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlFor="price" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Price</label>
                          <input type='text' name="price" id='price' className='w-full h-full rounded-lg bg-transparent border-2' onChange={handleChange}/>
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlFor="color" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Color</label>
                          <input type='text' name="color" id='color' className='w-full h-full rounded-lg bg-transparent border-2' onChange={handleChange}/>
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlFor="use" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Use</label>
                          <input type='text' name="use" id='use' className='w-full h-full rounded-lg bg-transparent border-2' onChange={handleChange}/>
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlFor="model" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>Model</label>
                          <input type='date' name="model" id='model' className='w-full text-center h-full rounded-lg bg-transparent border-2' onChange={handleChange}/>
                      </Box>
                      <Box className=' mx-auto w-5/6 relative h-[3rem] my-3'>
                          <label htmlFor="fuelkm" className='absolute top-[-0.5rem] left-4 px-2 z-10'
                              style={{backgroundColor:`${colors.primary[400]}`}}>How many Km /little</label>
                          <input type='number' name="fuelkm" id='fuelkm' className='w-full text-center h-full rounded-lg bg-transparent border-2' onChange={handleChange}/>
                      </Box>
                      <Box className='w-4/5 mx-auto p-2 grid grid-flow-row releative'>
                          <p className='text-center'>Is it Automatic</p>
                          <Box className=' col-span-2 grid grid-cols-2 p-3 gap-2'>
                            <Box className='bg-blue-500 relative p-1 rounded-lg'>
                              <label htmlFor="true" className='absolute right-0 text-right pr-4 w-full h-full px-4'>Yes</label>
                              <input type="radio" className="px-2 z-10" name="isAutomatic" id='true' value="true" onChange={handleChange}/>
                            </Box>
                            <Box className='bg-blue-500 relative p-1 rounded-lg'>
                              <label htmlFor="false" className='absolute right-0 w-full h-full text-right pr-4'>No</label>
                              <input type="radio" className="px-2 z-10" name="isAutomatic" id='false' value="false" onChange={handleChange}/>
                            </Box>
                          </Box>
                      </Box>
                  </Box>
              </Box>
        </Box>
        <Box>
            <h1 className='text-center font-extrabold py-3'>OTHER DETAILS</h1>
            <Box className='grid grid-cols-1 text-center'>
                <Box className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                      <label htmlFor="brand" className='col-span-2'>Brand Name:</label>
                      <input type="text" name="brand" id='brand' className='col-span-3 p-2 rounded-lg text-black' onChange={handleChange}/>
                </Box>
                <Box className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                      <label htmlFor="company" className='col-span-2'>Company Name:</label>
                      <input type="text" name="company" id='campany' className='col-span-3 p-2 rounded-lg text-black' onChange={handleChange}/>
                </Box>
                <Box className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                      <label htmlFor="plate" className='col-span-2'>Plate No:</label>
                      <input type="text" name="plate" id='plate' className='col-span-3 p-2 rounded-lg text-black' onChange={handleChange}/>
                </Box>
                <Box className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                      <label htmlFor="location" className='col-span-2'>Location Name:</label>
                      <input type="text" name="location" id='location' className='col-span-3 p-2 rounded-lg text-black' onChange={handleChange}/>
                </Box>
                <Box className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                      <label htmlFor="street" className='col-span-2'>Street(optional)</label>
                      <input type="address" name="street" id='street' className='col-span-3 p-2 rounded-lg text-black' onChange={handleChange}/>
                </Box>
                <Box className='w-[95%] mx-auto py-1 grid grid-cols-5 gap-2'>
                    <label htmlFor="descriptions" className='col-span-2'>Descriptions:</label>
                    <textarea name="descriptions" id='descriptions' rows={3}  className='col-span-3 p-2 rounded-lg text-black' onChange={handleChange}></textarea>
                </Box>
            </Box>
            <Box className=''>
                <h1 className='text-center py-2'>Discount (Optional) </h1>
                <Box className='grid grid-flow-row'>
                    <Box className='grid grid-cols-3 gap-4 p-4'>
                        <input type="number" className=" p-2 rounded-lg text-black" name="discountValue" placeholder="..%" onChange={handleChange}/>
                        <input type="text" className="p-2 rounded-lg col-span-2 text-black" name="discountDesc" placeholder="descriptions" onChange={handleChange}/>
                    </Box>
                </Box>
            </Box>
            <Box className='p-2 grid grid-cols-3'>
                <p>Will You Proovide Drive</p>
                <Box className=' col-span-2 grid grid-cols-2 p-3 gap-2'>
                    <Box className='bg-blue-500 relative p-1 rounded-lg'>
                        <label htmlFor="yes" className='absolute w-full h-full px-4'>Yes</label>
                        <input type="radio" className="px-2 z-10" name="isDriverProvided" id='yes' value="true" onChange={handleChange}/>
                    </Box>
                      <Box className='bg-blue-500 relative p-1 rounded-lg'>
                          <label htmlFor="no" className='absolute w-full h-full px-4'>No</label>
                          <input type="radio" className="px-2 z-10" name="isDriverProvided" id='no' value="false" onChange={handleChange}/>
                      </Box>
                </Box>
            </Box>
            <Box className='w-full py-3 flex'>
                  <button type="submit" className='mx-auto p-2 px-5 bg-blue-700 rounded-md'>POST</button>
            </Box>
            {error&&<Typography>
                {error}
            </Typography>}
            {message&&<Typography>
                {message}
            </Typography>}
        </Box>
    </form>
  )
}
