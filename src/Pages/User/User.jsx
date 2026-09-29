import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const User = () => {
    const navigatation=useNavigate()

    const handleLogout=()=>{
        navigatation("/login")
        toast.success("logout Successfully")
    }
  return (
    <div className="container mt-5">
      <div className="row">
        <h4 className="text-center">Manage Your Account and Appointment</h4>
        <div className="col-md-3">
          <img src="userpic" alt="userpic" className="card p-2" />
        </div>
        <div className="col-md-8 mt-3">
          <div className="user-container mb-3">
            <h6>Name:</h6>
            <h6>Gender:</h6>
            <h6>Dob:</h6>
            <h6>Email:</h6>
            <h6>Phone:</h6>
            <h6>Address:</h6>
          </div>
          <div className="button-container mt-5">
            <button type="button" className="btn btn-warning">
              <i className="fa-solid fa-pen-to-square"></i> Edit Profile
            </button>
            <button type="button" className="btn btn-primary ms-3">
              <i className="fa-solid fa-list"></i> Appointment
            </button>
            <button type="button" className="btn btn-danger ms-3 " onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
