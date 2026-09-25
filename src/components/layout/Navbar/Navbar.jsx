import Navmanu from "./Navmanu.jsx"
import Topbar from "./Topbar.jsx"


const Navbar = () => {
  return (
   <>
   <div className="navbar-container">
    <div className="row">
        <div className="col-md-3">image</div>
        <div className="col-md-9">
          <div>
            <Topbar/>
          </div>
          <div>
            <Navmanu/>
          </div>

           </div>
    </div>
   </div>
    </>
  )
}

export default Navbar