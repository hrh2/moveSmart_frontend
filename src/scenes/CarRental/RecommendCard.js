import React from "react";

const RecommendCarCard = (props) => {
  const { images, name, rate, specifications } = props.item;
  const color="bg-green-950"
  return (
    <div className={`box-shadow p-[20px] rounded-md cursor-pointer md:w-1/3 sm:w-1/2  w-full ${color}`}>
      <div className="recommend__car-top">
        <h5 className=" flex items-center gap-4 mb-[10px]">
          <span>
            <i className="ri-refresh-line text-[1.3rem]"></i>
          </span>
          {rate}% Recommended
        </h5>
      </div>

      <div className="">
        <img src={images[1]} alt="" className="max-h-[15vh]" />
      </div>
      <div className="md:text-[1.3rem] text-base my-[10px]">
        <h4>{name}</h4>
        <div className=" flex items-center justify-center">
          <div className="flex items-center justify-between gap-4">
            <p className=" flex items-center gap-4">
              <i className="ri-repeat-line"></i>
              {specifications.speed} mph
            </p>
            <p>
              <i className="ri-settings-2-line"></i>
            </p>
            <p>
              <i className="ri-timer-flash-line"></i>
            </p>
          </div>
          <span>${specifications.price}/day</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCarCard;
