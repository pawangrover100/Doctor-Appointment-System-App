import("./PatientReview.css");
import reviewData from "./PatientReview.json";

const PatientReview = () => {
  return (
    <>
      <div className="review-container">
        <div className="heading-container">
          <p>Testimonal</p>
          <h1>What Our Patients</h1>
          <h1>Says ABout Us</h1>
        </div>
        <div className="row why-container">
          {reviewData.map((d) => (
            <div className="col-md-3" key={d.id}>
              <img src={d.image} alt="d.image" width={"100px"} />
              <p>
                {d.title} <br />
                {d.inventor}
              </p>

              <div className="d-flex flex-row ">
                <h6 className="icon">
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star-half-alt active-star"></span>
                </h6>
              </div>
              <p>{d.comments}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PatientReview;
