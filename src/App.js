import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Contexts/theme";
import { TicketProvider } from './Contexts/tickets';
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//landing page
import Landing from "./layout/landing/main"
//not found
import NoFound from './layout/landing/NoFound';
//authentication page
import UserLogin from './layout/auth-authentication/client_Login';

import StationAdminLogin from './layout/auth-authentication/Station_Admin_Login'
import VpFancyAdminLogin from './layout/auth-authentication/VpFancy_Login'
import CashierLogin from './layout/auth-authentication/Station_Cashier'

import Signup from './layout/auth-authentication/client_Signup';
import Home from './layout/Home/Home';
//Public bus booking and cabs booking 
import Booking from './layout/Home/Booking'
import CabsBookingForm from './layout/Home/Cabs';
// Contact Us
import ContactUs from './layout/chats/ContactUs';
// Use profile
import Profile from './layout/Profile/Main';
import EditProfile from './scenes/CarRental/EditProfile'
import Payment from './layout/Profile/Payment';
// Rental Cars Services
import Cars from './layout/CarRental/main'
import AllCars from './scenes/CarRental/index'
import AddCar from './scenes/CarRental/AddingCar'
import SingleCar from './scenes/CarRental/CarRenting'
import Notification from './scenes/CarRental/Notification';
import ClientCars from './scenes/CarRental/ClientCars'
import CarDetails from './scenes/CarRental/CarDetails'
import CarUpdate from './scenes/CarRental/EditCar'
// VPfancy Admin  Station  Management Services (Controll over all stations)
import VpAdminStation from './layout/VpAdmin_Stations/Main'
import VpAdminStationDashboard from './layout/VpAdmin_Stations/Index'
import VpAdminStationTable from './scenes/VpAdmin_stations/index'
import VpAdminAddStation from './scenes/VpAdmin_stations/addStation';
import VpAdminStationAdmins from './scenes/VpAdmin_stations/StationAdmins'
import VpAdminProfileUpdate from './scenes/VpAdmin_stations/UpdateVpAdmin'
//Station Admin Controll over one station

import AdminStation from './layout/Station_Admin/main'
import AdminStationDashboard from './layout/Station_Admin/index'
import AdminBuses from './scenes/buses/index'
import AdminAddBus from './scenes/buses/addBus'
import AdminBusEditing from './scenes/buses/BusEditing'
import AdminAllDestinations from './scenes/Station_Admin/Destinations'
import AdminStationEditing from './scenes/Station_Admin/StationEditing'
import AdminAddCashier from './scenes/Station_Admin/AddCashier'
import AdminEditCashier from './scenes/Station_Admin/EditCashier'
import AdminAllCashiers from './scenes/Station_Admin/Cashiers'
import AdminEditing from './scenes/Station_Admin/AdminEdit'


// Cashier Routes
import WaitList from'./scenes/Cashier/WaitList'
import CashierLayout from "./layout/Cashier/main"
import CashierDashboard from "./scenes/Cashier/index"
import CashierChangingPassword from './scenes/Cashier/ChangePassword';



import '../src/components/index.css'
import'./index.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, colorMode] = useMode();
  // eslint-disable-next-line
  const [isSidebar, setIsSidebar] = useState(true);
  // eslint-disable-next-line
  const isLocalUser = () => {
    const localUser = localStorage.getItem('moveSmart_client_token');
    return localUser;
  };

  const isVpFancyAdmin = () => {
    const vpFancyAdmin = localStorage.getItem('moveSmart_vpfancyadmin_token');
    return vpFancyAdmin;
  };

  const isStationAdmin = () => {
    const stationAdmin = localStorage.getItem('moveSmart_station_admin_token');
    return stationAdmin;
  };

  const isStationCashier = () => {
    const stationCashier = localStorage.getItem('moveSmart_station_cashier_token');
    return stationCashier;
  };

  const redirectToLanding = () => <Navigate to="/landing" />;
 
  return (
  <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <TicketProvider>
          <CssBaseline />
          <Routes>
            {/* Landing Route */}
            <Route path="/landing" element={<Landing/>} />
            {/* Resource not found */}
            <Route path="/nofound" element={<NoFound/>} />
            {/* UserLogin routes */}
            <Route path="/login" exact element={<UserLogin />} />
            <Route path="/login/admin" exact element={<StationAdminLogin />} />
            <Route path="/login/vpfancyAdmin" exact element={<VpFancyAdminLogin />} />
            <Route path="/login/cashier" exact element={<CashierLogin />} />
     
            {/* User Route */}
            <Route path="/" element={isLocalUser() ? <Home /> : redirectToLanding()} >
              <Route index element={<Booking/>}/>
              <Route path="/cabs" element={<CabsBookingForm/>} />
              <Route path="/add-payment-visa-card" element={<Payment/>} />
              <Route path="/cars" exact element={<Cars/>}>
                <Route index element={<AllCars/>} />
                <Route path="/cars/single/:id" element={<SingleCar />} />
                <Route path="/cars/add" element={<AddCar />} />
                <Route path="/cars/editProfile" element={<EditProfile />} />
                <Route path="/cars/edit/:id" element={<AddCar />} />
                <Route path="/cars/profile" element={<Profile />} />
                <Route path="/cars/notifications" element={<Notification/>} />
                <Route path="/cars/mine" element={<ClientCars/>} />
                <Route path="/cars/details/:id" element={<CarDetails/>} />
                <Route path="/cars/update/:id" element={<CarUpdate/>} />
              </Route>
            </Route>
            {/* Contact us */}
            <Route path="/ContactUs" element={<ContactUs />} />
            {/* Signup  and User creation Routes */}
            <Route path="/signup" exact element={<Signup />} />
            {/* Profile Routes */}
            <Route path="/userProfile" exact element={isLocalUser()?<Profile />:redirectToLanding()} />

            <Route path="/vpadmin/station" element={isVpFancyAdmin() ? <VpAdminStation /> : redirectToLanding()}>
              <Route index element={<VpAdminStationDashboard />} />
              <Route path="/vpadmin/station/allStations" element={<VpAdminStationTable />} />
              <Route path="/vpadmin/station/add" element={<VpAdminAddStation />} />
              <Route path="/vpadmin/station/update" element={<VpAdminProfileUpdate />} />
              <Route path="/vpadmin/station/admins" element={<VpAdminStationAdmins/>} />
            </Route>

            <Route path="/admin/station" element={isStationAdmin() ? <AdminStation /> : redirectToLanding()} >
              <Route index element={<AdminStationDashboard />} />
              <Route path="/admin/station/edit" element={<AdminStationEditing/>}/>
              <Route path="/admin/station/admin/edit" element={<AdminEditing/>}/>
              <Route path="/admin/station/destinations" element={<AdminAllDestinations />}/>
              <Route path="/admin/station/buses" element={<AdminBuses />} />
              <Route path="/admin/station/bus/add" element={<AdminAddBus />} />
              <Route path="/admin/station/bus/edit/:id" element={<AdminBusEditing />} />
              <Route path="/admin/station/cashiers" element={<AdminAllCashiers />}/>
              <Route path="/admin/station/cashier/add" element={<AdminAddCashier/>}/>
              <Route path="/admin/station/cashier/edit/:id" element={<AdminEditCashier />}/>
            </Route>
            <Route path="/cashier" element={isStationCashier() ? <CashierLayout /> : redirectToLanding()} >
              <Route index element={<CashierDashboard />} />
              <Route path="/cashier/waitlist" element={<WaitList/>}/>
              <Route path="/cashier/edit" element={<CashierChangingPassword/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/nofound" />} />
          </Routes>
      </TicketProvider>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App
