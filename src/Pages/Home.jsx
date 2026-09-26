import Shortintro from "../components/Shortintro/Shortintro.jsx";
import Slider from "../components/slider/Slider.jsx";
import Facility from "../components/Static/Facility/Facility.jsx";

const Home = () => {
  return (
    <>
      {/* slider */}
      <Slider />
      {/* facility*/}
      <Facility />
      {/* shortintro */}
      <Shortintro />
    </>
  );
};

export default Home;
