import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";


export default function SwiperSlider() {
  const [sliders, setSliders] = useState([]);
  console.log(sliders)
  useEffect(()=>{
    fetch('http://localhost:5000/sub_category')
    .then(res => res.json())
    .then(data => {
        setSliders(data);
    })
    .catch(error => {
        console.log(error)
    })
  },[])
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div
              className="hero bg-cover min-h-[350px] sm:min-h-[600px]"
              style={{ backgroundImage: `url(${slide?.image})` }}
            >
              <div className="bg-opacity-60"></div>
              <div
                className="hero-content text-center text-neutral-content"
              >
                <div className="max-w-md">
                  <h1 className="mb-5 text-6xl text-violet-500 font-extrabold  animate__animated animate__backInDown">
                    {slide?.name}
                  </h1>
                  <p className="mb-5  animate__animated animate__backInUp">
                    {slide?.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
