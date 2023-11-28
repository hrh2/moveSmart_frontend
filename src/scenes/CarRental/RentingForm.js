import React, { useState } from 'react';

export default function BookPolicyI(props) {
  const { specifications, privileges } = props.details;
  const discounts = privileges.discounts;

  const [selectedOption, setSelectedOption] = useState("");
  const [price,setPrice]=useState(null);
  const [requestEndDate, setRequestEndDate] = useState("");
  const [requestEnd, setRequestEnd] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState(0); // Track selected discount
  const [discountDescription, setDiscountDescription] = useState("No Discount Just a Day");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleDiscountSelect = (percentage, description) => {
    setSelectedDiscount(percentage);
    setDiscountDescription(description);
  };

  const handleOptionSelect = (option, price) => {
    setSelectedOption(option);
    setPrice(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedOption || !requestEndDate || !requestEnd) {
      // Handle form validation and display an error message to the user
      alert("Please fill in all fields.");
    } else {
      // Perform form submission (you can add your server request here)
      const requestData = {
        selectedOption,
        price,
        requestEndDate,
        requestEnd,
        selectedDiscount, // Include selected discount in the form data
        discountDescription, // Include discount description in the form data
      };
      // Send requestData to the server or perform other actions
      console.log("Form data:", requestData);
      setFormSubmitted(true);
      setTimeout(()=>{
        window.location="/cars";
      },1000)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='md:text-base sm:text-sm text-xs bg-slate-300 bg-opacity-30 py-2'>
        <div className='grid grid-cols-2 font-bold '>
          <h2 className='md:w-3/5 sm:w-4/5 w-5/6 mx-auto text-center text-[60%]'>
            Please select if you want to book a car with a Driver or without a Driver
          </h2>
          <h2 className='text-right border-r-4 py-2 px-2 w-5/6'>OWNING</h2>
        </div>
        <div className='mx-auto grid grid-flow-row gap-2 my-2 md:w-3/5 sm:w-4/5 w-5/6 text-[80%]'>
          <div className='grid grid-cols-3 gap-3'>
            <div className=' col-span-2 grid grid-cols-2 border-2 rounded-sm'>
              <div className='py-1 text-center border-r-2'>With No Driver</div>
              <div className='py-1 text-center'>$ {specifications.price} a day</div>
            </div>
            <button
              type="button"
              className={`border-2 rounded-sm ${price===specifications.price? "bg-blue-600":"bg-transparent"}`}
              onClick={() => handleOptionSelect("with no driver", specifications.price)}
            >
              Select
            </button>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            <div className=' col-span-2 grid grid-cols-2 border-2 rounded-sm'>
              <div className='py-2 text-center border-r-2'>With Driver</div>
              <div className='py-2 text-center'>$ {specifications.price + 15} a day</div>
            </div>
            <button
              type="button"
              className={`border-2 rounded-sm ${price===specifications.price+15? "bg-blue-600":"bg-transparent"}`}
              onClick={() => handleOptionSelect("with a driver", specifications.price + 15)}
            >
              Select
            </button>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 w-5/6 mx-auto'>
        <div className=''>
          <h1 className='flex gap-3 border-l-4 px-2 font-bold my-2 md:text-base sm:text-sm text-xs mx-auto'>
            DISCOUNTS
            <span className='text-[80%] font-light italic'>We have discounts for you</span>
          </h1>
          <div className='mx-auto grid grid-cols-2 md:w-5/6 p-2 text-[80%]'>
          {discounts.map((discount) => (
          <div className='flex gap-1' key={discount._id}>
            <input
              type='radio'
              name='discount'
              id={discount.Details}
              value={discount.percentage}
              onChange={() => handleDiscountSelect(discount.percentage, discount.Details)}
            />
            <span className='p-[.5rem]'>{discount.percentage}%</span>
            <label htmlhtmlFor={discount.Details} className='bg-gray-400 p-[.5rem] rounded-md'>
              {discount.Details}
            </label>
          </div>
        ))}
          </div>
        </div>
        <div className=''>
          <h1 className='border-r-4 px-2 font-bold my-2 md:text-base sm:text-sm text-xs text-right grid grid-flow-col gap-1'>
            <span className='text-[80%] font-light italic text-justify'>
              Choose a deadline for your request
            </span>
            DEADLINE
          </h1>
          <div className='grid grid-cols-2 gap-4 md:w-5/6 mx-auto p-2'>
            <div className='grid grid-flow-row'>
              <label htmlhtmlFor="requestEndDate">Date</label>
              <input
                type='date'
                name='requestEndDate'
                id='requestEndDate'
                className='bg-gray-400 p-[.5rem] rounded-md'
                value={requestEndDate}
                onChange={(e) => setRequestEndDate(e.target.value)}
                required
              />
            </div>
            <div className='grid grid-flow-row'>
              <label htmlhtmlFor="requestEnd">Time</label>
              <input
                type='time'
                name='requestEnd'
                id='requestEnd'
                className='bg-gray-400 p-[.5rem] rounded-md'
                value={requestEnd}
                onChange={(e) => setRequestEnd(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full py-3 flex'>
        <button type="submit" className={`mx-auto p-2 px-5 ${selectedOption?"bg-blue-700":"bg-red-500"}  rounded-md`} disabled={!selectedOption}>
          Request
        </button>
      </div>
      {formSubmitted && <p>Your Request is Successfully! wait for approval from the owner</p>}
    </form>
  );
}
