import Topbar from "./Topbar";
import Navmenu from "./Navmenu";
import { NavLink } from 'react-router';
import logo from '../../../assets/logo.png'
export const Navbar = () => {
  return (
    <>
      <div className="navbar-Container">
        <div className="row">
          <div className="col-md-3">
            <NavLink>
              <img src={logo} alt="logo" className="brand-logo" />
            </NavLink>
          </div>
          <div className="col-md-9">
            {/* Topbar menu */}
            <div>
              <Topbar />
            </div>
            {/* Navbar menu */}
            <div>
              <Navmenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
