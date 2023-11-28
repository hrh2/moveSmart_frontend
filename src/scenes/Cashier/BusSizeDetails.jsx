import React from "react";
// import { Box, Typography } from "@mui/material";
// import { LiaMapPinSolid } from "react-icons/lia";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const MileChart = ({ buses }) => {
  const busesData = [
    { bus: "Bus A", num: 10 },
    { bus: "Bus B", num: 16 },
    { bus: "Bus B", num: 18 },
    { bus: "Bus B", num: 15 },
    { bus: "Bus B", num: 16 },
    { bus: "Bus B", num: 19 },
    { bus: "Bus B", num: 11 },
  ];
    return (
        <ResponsiveContainer width="100%" height="80%" minWidth="200px" className="mx-auto">
          <BarChart data={buses}>
            <XAxis dataKey="busplate" label="Plate" stroke="#2884ff" />
            <Bar dataKey="remainingSeats" label="Remaining Seats" stroke="#2884ff"  fill="#288fff" barSize={15} />
            <Tooltip wrapperClassName="tooltip__style" cursor={false} />
          </BarChart>
        </ResponsiveContainer>
  );
};

export default MileChart;
