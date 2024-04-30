import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";

export default function SwiperSlider() {
  const [loading, setLoading] = useState(true);
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch("https://b9-assignment10-server-zeta.vercel.app/sub_category")
      .then((res) => res.json())
      .then((data) => {
        setSliders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div className="relative h-[65vh] flex items-center justify-center">
          <span className="loading loading-ring loading-xs text-primary absolute translate-y-5"></span>
        </div>
      ) : (
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
                className="hero bg-cover min-h-[350px] sm:min-h-[600px] z-[-1]"
                style={{ backgroundImage: `url(${slide?.photo})` }}
              >
                <div className="bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-3xl sm:text-6xl text-violet-500 font-extrabold  animate__animated animate__backInDown">
                      {slide?.itemName}
                    </h1>
                    <p className="mb-5 sm:text-2xl text-slate-700 font-bold  animate__animated animate__backInUp">
                      {slide?.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
