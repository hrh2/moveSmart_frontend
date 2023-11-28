// eslint-disable-next-line 
import React,{ useState, useEffect } from 'react';
import {Box,useTheme} from '@mui/material'
import { tokens } from '../../Contexts/theme';

// eslint-disable-next-line 
import Axios from 'axios'


function MyForm() {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     return (
          <Box className='md:w-4/6 sm:w-5/6 w-11/12 mx-auto px-4  py-6 rounded-lg box-shadow' backgroundColor={colors.primary[400]} >
               <form className="">
                    <Box className="items-center">
                         <h2 className='text-white font-bold pt-3 pb-2  px-2 text-[.5em] sm:text-[.8em] md:text-[1.245em]'>Search Ticket for Your Journey</h2>
                         <Box className='grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-3'>
                            <Box p={1} className="flex">
                            <labe htmlhtmlFor="from" className="w-1/6">From :</labe>
                            <input
                                    type="text"
                                    className="p-3 rounded-lg w-5/6 "
                                    placeholder="...."
                                    required />
                            </Box>
                            <Box p={1} className="flex">
                            <labe htmlhtmlFor="to" className="w-1/6">To :</labe>
                            <input
                                    type="text"
                                    className="p-3 rounded-lg w-5/6 "
                                    placeholder="...."
                                    required />
                            </Box>
                            <Box p={1}>
                            <input
                                    type="date"
                                    className="p-3 rounded-lg w-full "
                                    placeholder="...."
                                    required />
                            </Box>
                            <Box p={1}>
                            <input
                                    type="number"
                                    className="p-3 rounded-lg w-full "
                                    placeholder="Passangers"
                                    required />
                            </Box>
                            <Box p={1} className="flex text-base">
                              <label htmlhtmlFor=""className="w-3/6 md:text-center">Luggage :</label>
                              <select className='w-3/6 h-full p-3 rounded-md text-black' required>
                                <option value="">None</option>
                                <option value="">hands Luggade</option>
                                <option value="">Boxes</option>
                                <option value="">Folded Wheelchair</option>
                              </select>
                            </Box>
                         </Box>
                         <Box className="flex flex-column items-center">
                              <button
                                   type="submit"
                                   className="border-0 bg-blue-900 px-5 py-2 rounded-3xl"
                                   >Get a Quote
                              </button>
                         </Box>
                    </Box>
               </form>
          </Box>
     );

}
export default MyForm;
