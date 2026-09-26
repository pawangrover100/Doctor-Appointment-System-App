import { NavLink } from "react-router";
import Navmanu from "./Navmanu.jsx";
import Topbar from "./Topbar.jsx";
import logo from "../../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="row">
          <div className="col-md-3">
            <NavLink>
              <img src={logo} alt="Logo" className="brand-logo" />
            </NavLink>
          </div>
          <div className="col-md-9">
            {/* topbar */}
            <div>
              <Topbar />
            </div>
            {/* topbar end */}
            {/* Navmanu */}
            <div>
              <Navmanu />
            </div>
            {/* Navmanu end  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
