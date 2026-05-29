import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// image
import banner1 from "../../assets/banner 1.png";
import banner2 from "../../assets/banner 2.png";
import banner3 from "../../assets/banner 3.png";

function Slider() {
  const image = [banner1, banner2, banner3];

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {image.map((d, i) => (
          <SwiperSlide key={i}>
            <img
              src={d}
              alt="bannerimages"
              style={{ height: "500px", width: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;