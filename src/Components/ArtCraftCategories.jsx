import { useEffect, useState } from "react";
import ArtCraftCard from "./ArtCraftCard";
import Typewriter from "typewriter-effect";
const ArtCraftCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://b9-assignment10-server-zeta.vercel.app/sub_category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="relative flex items-center justify-center">
          <span className="loading loading-ring loading-xs text-primary absolute translate-y-5"></span>
        </div>
      ) : (
        <div className="container mx-auto my-6 sm:my-28">
          <div className="text-center text-4xl font-bold my-12 space-y-4">
            <h2>Art and Craft Categories</h2>
            <Typewriter
              options={{
                strings: [
                  "Card Making",
                  "Scarp Booking",
                  "Glass Painting",
                  "Lampworking",
                  "Glass Dying & Staining",
                  "Paper Quilling & Origami",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="grid md:grid-cols-3 space-y-6 sm:space-y-0 md:gap-12">
            {categories.map((category) => (
              <ArtCraftCard
                key={category?._id}
                category={category}
              ></ArtCraftCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtCraftCategories;
