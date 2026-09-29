import DoctorData from "./DoctorData.json";
import { NavLink } from "react-router";
import "./AllDoctor.css";
const AllDoctor = () => {
  return (
    <>
        <h4 className="text-center text-success mt-3">
          Select a Doctor and Book a appointment online now
        </h4>
      <div className="container doc-container">

        {DoctorData.map((d) => (
          <div className="card" key={d.id} style={{ width: "15rem" }}>
            <NavLink to={`/doctors/${d.id}`}>
              <img
                src={d.pic}
                alt="pic"
                width={150}
                height={150}
                className="card-image-top"
              />
              <div className="card-body">
                <h6>{d.name}</h6>
                <p>{d.degree}</p>
              </div>
              <div className="card-footer">
                <p>
                  <i className={d.icon}></i>
                  {d.specialist}
                </p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllDoctor;
