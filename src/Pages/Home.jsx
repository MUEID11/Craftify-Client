
import SwiperSlider from "../Components/SwiperSlider";
import UseAuth from "../hooks/UseAuth";
import CraftItems from "./CraftItems";

import Faq from "./Faq";

const Home = () => {
  const { loading } = UseAuth();
  return loading ? (
    <div className="relative h-[90vh] flex items-center justify-center">
      <span className="loading loading-spinner text-info loading-md absolute top-50 translate-y-5"></span>
    </div>
  ) : (
    <div className="container mx-auto p-6">
      <SwiperSlider></SwiperSlider>
        <CraftItems></CraftItems>
      <Faq></Faq>
    </div>
  );
};

export default Home;