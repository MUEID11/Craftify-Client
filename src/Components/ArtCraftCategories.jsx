import { useEffect, useState } from "react";
import ArtCraftCard from "./ArtCraftCard";

const ArtCraftCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/sub_category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
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
          <h2 className="text-4xl font-bold my-8 sm:my-16 text-center ">
            Art and Craft Categroies
          </h2>
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
