import React,{ useState,useEffect } from "react";
import {Menu, MenuItem, Sidebar, } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Contexts/theme";
import {PiVanFill} from "react-icons/pi"
import {BsTruckFront} from "react-icons/bs"
import {FaTruckPickup} from "react-icons/fa"
import {MdNotificationsActive} from "react-icons/md"
import {IoCarSportSharp,IoCarSportOutline} from "react-icons/io5"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditIcon from '@mui/icons-material/Edit';
import {PiCarFill} from "react-icons/pi";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Loader from '../../components/Loader'
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to} className="p-[0px!important]">
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[200],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
    </Link>
  );
};

const SideBar = ({image,name}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
      <Sidebar collapsed={isCollapsed} 
               backgroundColor={colors.primary[400]}
               className=""
               height="93vh"    
               width="220px"
              collapsedWidth="60px"
               breakPoint='sm'
               style={{
               height: '93vh',
              top: 'auto',
              position: 'sticky',
              padding: '0rem',
              margin: '0rem',
              collapsedWidth:"50px",
              }}
      >
        <Menu iconShape="circle">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            className="mx-auto"
            style={{
              color: colors.grey[200],
              margin:0,
            }}
          >
            {!isCollapsed && (
              
                <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
               >
                <Typography variant="h3" color={colors.grey[100]}>
                  Move <span className="text-yellow-500">Smart</span>
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
              
            )}
          </MenuItem>

          {!isCollapsed && (
            <Link to="/cars/profile">
             <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {image&&<Box
                  width="100px"
                  height="100px"
                  className="bg-cover bg-center"
                  style={{ cursor: "pointer", borderRadius: "50%" ,backgroundImage:`url(${image})`}}
                />}
                {!image&&<Loader/>}
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {name}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                </Typography>
              </Box>
            </Box>
          </Link>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="View Cars"
              to="/cars"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed&&<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>}
            <Item
              title="My Cars"
              to="/cars/mine"
              icon={<IoCarSportOutline size={27} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notifications"
              to="/cars/notifications"
              icon={<MdNotificationsActive size={27}/>}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed&&<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
              width={100}
            >
              Forms
            </Typography>}
            <Item
              title="Car"
              to="/cars/add"
              icon={<ControlPointIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="profile"
              to="/cars/editProfile"
              icon={<EditIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed&&<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Categories
            </Typography>}
            <Item
              title="Coup"
              to="/cars/#coup"
              icon={<IoCarSportSharp size={27} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="SUV"
              to="/cars/#suv"
              icon={<PiCarFill size={27}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pickup"
              to="/cars/#pickup"
              icon={<FaTruckPickup size={27}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Mini-Van"
              to="/cars/#mini-van"
              icon={<PiVanFill size={27}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Trucks"
              to="/cars/#trucks"
              icon={<BsTruckFront size={27}/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>     
      </Sidebar>
  );
};

export default SideBar;
