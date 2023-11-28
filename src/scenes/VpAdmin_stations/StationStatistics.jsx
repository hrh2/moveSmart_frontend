import React from "react";
import { Box, Typography } from "@mui/material";
import { LiaMapPinSolid } from "react-icons/lia";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const MileChart = ({ stations }) => {
  // Filter stations with numberOfDestinations not equal to zero
  const destination = stations.filter((st) => st.numberOfDestinations > 2);
  return (
    <>
      {destination.length !== 0 ? (
        <ResponsiveContainer width="100%">
          <BarChart data={stations}>
            <XAxis dataKey="name" stroke="#2884ff" />
            <Bar dataKey="numberOfDestinations" stroke="#2884ff" fill="#2884ff" barSize={30} />
            <Tooltip wrapperClassName="tooltip__style" cursor={false} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <Box>
          <Typography className=" overflow-y-scroll max-h-[23vh]">
            Registered stations have Zero Destinations:
            <h4 className="text-center h3">Stations List</h4>
            <ul>
              {stations.map((st, i) => (
                <li className="flex gap-4 justify-center" key={i}>
                  <LiaMapPinSolid size={25} className=" rotate-[-90deg]"/>
                  {st.name}
                </li>
              ))}
            </ul>
          </Typography>
        </Box>
      )}
    </>
  );
};

export default MileChart;
