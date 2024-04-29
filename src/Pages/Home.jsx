import ArtCraftCategories from "../Components/ArtCraftCategories";
import SwiperSlider from "../Components/SwiperSlider";
import UseAuth from "../hooks/UseAuth";
import CraftItems from "./CraftItems";

import Faq from "./Faq";
import TalentedPeople from "./TalentedPeople";

const Home = () => {
  const { loading } = UseAuth();
  return loading ? (
    <div className="relative h-screen flex items-center justify-center">
      <span className="loading loading-dots loading-md text-primary absolute -translate-y-28"></span>
    </div>
  ) : (
    <div className="container mx-auto p-6">
      <SwiperSlider></SwiperSlider>
      <CraftItems></CraftItems>
      <ArtCraftCategories></ArtCraftCategories>
      <TalentedPeople></TalentedPeople>
      <Faq></Faq>
    </div>
  );
};

export default Home;
