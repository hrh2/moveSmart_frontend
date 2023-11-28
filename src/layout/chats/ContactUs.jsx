import React from 'react'
import Questions from '../../components/questions'
import Feedback from '../../components/feedback'
import { FaRegUserCircle } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';

import Navbar2 from '../../components/ChatNavbar';
import Footer from '../../components/ChatFooter';

export default function ContactUs() {
  return (
    <div className='w-full bg-blue-950 text-white min-h-screen'>
      <Navbar2/>
      <div className='w-10/12 mx-auto'>
        <h1 className='border-l-4 px-1 md:text-sm sm:text-xs text-[.6em] font-extrabold'>GOT ANY QUESTION</h1>
      </div>
      <div className='w-5/6 mx-auto'>
        <h1 className='px-2 float-end border-r-4 md:text-sm sm:text-xs text-[.6em] font-extrabold'>Our Chatbot is ready to help</h1>
      </div>
      <div className='w-5/6 mx-auto' style={{ position: 'relative' }}>
        <form className="was-validated my-5">
          <span className=''><FaRegUserCircle size="2.5em" /> <span className='fw-bold'>User</span></span>
          <div className="my-1" style={{ position: 'relative' }}>
            <label htmlFor="validationTextarea" className="form-label"></label>
            <div style={{ position: 'relative' }}>
              <input 
                className="form-control message-input" 
              id="validationTextarea" 
              placeholder="Type the message" 
              required>
              </input>
              <button 
              type="submit" 
              className='p-2 border-0 bg-white bg-opacity-10' 
              style={{ position: 'absolute', bottom: '1em', right: '1em' }}>
              <GrSend 
              size="2.2em" 
              />
              </button>
            </div>
          </div>
        </form>
      </div>
      <Questions/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

