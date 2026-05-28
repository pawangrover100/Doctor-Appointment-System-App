import Topbar from "./Topbar";
import Navmenu from "./Navmenu";
export const Navbar = () => {
  return (
    <>
      <div className="navbar-Container">
        <div className="row">
          <div className="col-md-3">Image </div>
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
