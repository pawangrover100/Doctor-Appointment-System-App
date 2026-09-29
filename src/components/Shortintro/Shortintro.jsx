import hos from "../../assets/image/hos.jpg";
import "./Shortintro.css";
const Shortintro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="row">
          <div className="col-md-6 img-container">
            <img src={hos} alt="hospital" className="hos-image" />
          </div>
          <div className="col-md-5 info-container">
            <h1>Welcome to Our Hospital</h1>
            <h6>Your Health is Our Priority</h6>
            <p>
              Hospital is a NABH-accredited multispecialty hospital in Delhi,
              providing comprehensive, patient-centred healthcare with
              experienced doctors and advanced medical services.
            </p>
            <p>
              Hospital – A 31-year-old Multidisciplinary Hospital is a widely
              recognized healthcare unit in India that offers new hope and
              solution to people seeking our care.
            </p>
            <button className="btn btn-primary">Book an Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shortintro;
