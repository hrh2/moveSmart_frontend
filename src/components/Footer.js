import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import {FaSlack } from 'react-icons/fa';
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl';
import { TbBrandGooglePlay } from 'react-icons/tb';
import { SiAppstore } from 'react-icons/si';

export default function Footer() {
  return (
    <div className='min-w-[100vw] mx-auto bg-slate-950'>
      <div className='grid md:grid-cols-5 grid-cols-3 justify-center align-items-center'>
        <div className='py-2 text-center md:col-span-1 sm:col-span-1 col-span-3'>
          <img className='block mx-auto w-16 aspect-square rounded-full sm:mx-0 sm:shrink-0' src={logo} alt='logo' />
          <p className='text-indigo-700 text-[.6em]'>
            “Transportation should be a convenient, 
            <br/>
            stress-free experience for everyone.”
          </p>
        </div>
        <div className='grid grid-flow-row gap-2 text-[.6em] px-3'>
          <h3 className='text-yellow-400 font-extrabold'>MoveSmart</h3>
            <Link to='/' className='text-white'>
              Home
            </Link>
            <Link to='/contactUs' className='text-white'>
              About Us
            </Link>
            <Link to='/contactUs' className='text-white'>
              Contact Us
            </Link>
        </div>
        <div className='grid grid-flow-row gap-2 text-[.6em] px-3'>
          <h3 className='text-yellow-400  font-extrabold'>Help</h3>
            <Link to='/userProfile' className='text-white'>
              ChatBot
            </Link>
            <Link to='/ContactUs' className='text-white'>
              Contact Us
            </Link>
        </div>
        <div className='grid grid-flow-row gap-2 text-[.6em]'>
          <h3 className='text-yellow-400 font-extrabold'>Account</h3>
            <Link to='/userProfile' className='text-white'>
              Switch Account
            </Link>
            <Link to='/userProfile' className='text-white'>
              Forgot password
            </Link>
        </div>
        <div className=' md:col-span-1 sm:col-span-1 col-span-3 grid grid-rows-3 gap-2 p-1 px-3 text-[.6em] md:text-left sm:text-left text-center'>
          <h3 className='text-yellow-400 md:col-span-1 sm:col-span-1 col-span-2 font-extrabold'>Get our app</h3>
            <Link to='/userProfile' className='p-1 px-3 rounded-md text-blue-950 bg-white font-bold flex gap-2 '>
              <TbBrandGooglePlay size="1.2em" />Google play
            </Link>
          <Link to='/userProfile' className='p-1 px-3 rounded-md text-blue-950 bg-white font-bold flex gap-2'>
              <SiAppstore size="1.5em" />App store
            </Link>
        </div>
      </div>
      <div className='w-11/12 grid grid-flow-col p-1 border-white border-t-4 mx-auto'>
        <div className=' text-[.6em]'>
            <p className='flex gap-2 text-[.67em] text-center'>
              <Link to='/contactUs' className='text-white border-white py-1'>
                <span className=''>Terms and Privacy Policy</span>
              </Link>
              <span className='text-white border-l-2 px-2 py-1' >
                &copy; MoveSmart 2023. All rights reserved
              </span>
            </p>
        </div>
        <div className='flex gap-2 text-white'>
          <span ><SlSocialFacebook size={20} className='p-[.12rem] border-white border-2 rounded-full' /></span>
          <span ><SlSocialLinkedin size={20} className='p-[.12rem] border-white border-2 rounded-full' /></span>
          <span ><FaSlack size={20} className='p-[.12rem] border-white border-2 rounded-full' /></span>
        </div>
      </div>
    </div>
  );
}
