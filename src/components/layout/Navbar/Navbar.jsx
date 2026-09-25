import Navmanu from "./Navmanu.jsx";
import Topbar from "./Topbar.jsx";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="row">
          <div className="col-md-3">image</div>
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
