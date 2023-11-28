import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../img/logo.png'

export default function SideBar() {
     return (
          <div className="sidebarGen container-fluid d-flex flex-column justify-content-center align-items-center h-100">
               <img src={logo1} alt="logo" className="mx-auto Logo" style={{ position: 'absolute', top: '.1em' }} />
               <Link to="/" className="btn btn-lg text-white fw-bold active py-2 border-0">
                    HOME
               </Link>
               <hr className="w-75 m-1" />
               <Link to="/ContactUs" className="btn btn-lg text-white fw-bold py-2 border-0">
                    Contact Us
               </Link>
          </div>
     );
}
