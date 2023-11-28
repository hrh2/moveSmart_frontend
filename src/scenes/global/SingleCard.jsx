import React from "react";

const SingleCard = (props) => {
  const { title, totalNumber, icon,color } = props.item;
  return (
    <div className={`p-[20px] flex items-center justify-between cursor-pointer rounded-md ${color}`}>
      <div className="">
        <h4 className=" text-base font-normal">{title}</h4>
        <span>{totalNumber}</span>
      </div>

      <span className="text-3xl font-normal">
        <i className={icon}></i>
      </span>
    </div>
  );
};

export default SingleCard;
