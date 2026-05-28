
import Topbar from "./Topbar";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-Container">
        <div className="col-md-3">Image </div>
        <div className="col-md-9">
            {/* Topbar menu */}
          <div>
            <Topbar />
          </div>
          {/* Navbar menu */}
          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};
