import ContactMessage from "../components/ContactMessage/ContactMessage.jsx";
import Shortintro from "../components/Shortintro/Shortintro.jsx";
import Slider from "../components/slider/Slider.jsx";
import Facility from "../components/Static/Facility/Facility.jsx";
import PatientReview from "../components/Static/PatientReview/PatientReview.jsx";
import WhyChoose from "../components/WhyChoose/WhyChoose.jsx";

const Home = () => {
  return (
    <>
      {/* slider */}
      <Slider />
      {/* facility*/}
      <Facility />
      {/* shortintro */}
      <Shortintro />

      {/* why choose */}
      <WhyChoose />
      {/* patientsreview
       */}
       <PatientReview/>
      {/* ContactMessage */}
      <ContactMessage />
    </>
  );
};

export default Home;
