import React from 'react'

export default function Stars(props) {
    const { title,number,color } = props.item;
  return (
    
    <div className={`p-[20px] flex  items-center justify-between cursor-pointer rounded-md ${color}`}>
    <div className="">
      <h4 className=" text-base font-normal">{title} </h4>
    </div>
      <span className=" flex gap-4">
          {number.map((index) => (
              <svg
                  key={index}
                  className="w-4 h-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
              >
                  <path d="M12 2L14.6 8.8L22 9.3L16.2 14L17.5 21L12 17.5L6.5 21L7.8 14L2 9.3L9.4 8.8L12 2Z" />
              </svg>
          ))}    
        </span>
      </div>
  )
}