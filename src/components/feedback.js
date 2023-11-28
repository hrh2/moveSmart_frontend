import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { AiOutlineDislike } from 'react-icons/ai'
export default function Feedback() {
  return (
       <div className='w-5/6 mx-auto ' style={{ position: 'relative' }}>
            <h1 className='border-l-4 px-1 md:text-sm sm:text-xs text-[.6em] font-extrabold'>Feedback and reviews</h1>
            <form className=" my-3">
                 <div className="my-1" style={{ position: 'relative' }}>
                      <label htmlFor="validationTextarea" className="form-label"></label>
                      <div style={{ position: 'relative' }}>
                           <input type="text"
                                className="form-control feedback-input"
                                id="validationTextarea"
                                placeholder=""
                                required>
                           </input>
                           <button
                                type="submit"
                                className='px-2  py-[.6em] border-0 bg-blue-950 text-white rounded-2xl'
                                style={{ position: 'absolute', bottom: '.5em', right: '4em' }}>
                                send
                           </button>
                           <button
                                type="button"
                                className='p-2 border-0 bg-white bg-opacity-10'
                                style={{ position: 'absolute', top: '0', left: '8em' }}>
                                <AiOutlineDislike size="2em" className="custom-icon" />
                           </button>
                           <button
                                type="button"
                                className='p-2 border-0 bg-white bg-opacity-10'
                                style={{ position: 'absolute', top: '0', left: '5em' }}>
                                <AiOutlineLike size="2em" />
                           </button>
                      </div>
                 </div>
            </form>
       </div>
  )
}
