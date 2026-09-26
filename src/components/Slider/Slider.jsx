import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// images
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const Slider = () => {
  const images = [banner1, banner2, banner3];
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, stopOnLastSlide: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {images.map((d, i) => (
          <SwiperSlide key="i">
            <img
              src={d}
              alt={`banner${i}`}
              style={{ width: "100%", height: "550px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
