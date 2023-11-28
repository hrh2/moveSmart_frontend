import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
const mileChart = ({cars}) => {
  console.log()
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={cars}>
        <XAxis dataKey="name" stroke="#2884ff" className="text-[.5rem]"/>
        <Bar dataKey="rate" stroke="#2884ff" fill="#2884ff" barSize={30} />

        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default mileChart;
