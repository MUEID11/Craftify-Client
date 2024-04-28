import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [craftDetails, setCraftDetails] = useState({});
  const {
    photo,
    itemName,
    shortDescription,
    price,
    subcategory,
    stockStatus,
    processingTime,
    customization,
  } = craftDetails;
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/allart/${id}`)
      .then((res) => res.json())
      .then((item) => {
        console.log(item);
        setCraftDetails(item);
        setLoading(false);
      })
      .catch((error) => {
        error.message;
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      {loading ? (
        <div className="relative h-screen flex items-center justify-center">
          <span className="loading loading-ball text-primary loading-md absolute top-50 translate-y-5"></span>
        </div>
      ) : (
        <section className="container mx-auto">
          <div className="dark:bg-violet-900 bg-violet-400 p-14">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 text-center lg:pb-56 md:py-32 md:px-10 dark:text-gray-50">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
                {itemName}
              </h1>
              <div className="mb-8 text-lg mt-8 space-y-2">
                <p className="text-4xl xl:max-w-3xl dark:text-gray-50 font-bold">
                  {subcategory}
                </p>
                <p className="text-lg  xl:max-w-3xl dark:text-gray-50 font-bold">
                  {shortDescription}
                </p>
                <p className="text-lg  xl:max-w-3xl dark:text-gray-50 font-bold">
                  Processing Time : {processingTime}
                </p>
                <p className="text-lg  xl:max-w-3xl dark:text-gray-50 font-bold">
                  Stock status : {stockStatus}
                </p>
                <p className="text-lg xl:max-w-3xl dark:text-gray-50 font-bold">
                  Customization: {customization}
                </p>
                <p className="text-lg xl:max-w-3xl dark:text-gray-50 font-bold">
                  Price: {price}
                </p>
              </div>
              <div className="flex flex-wrap justify-center">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <img
            src={photo}
            alt=""
            className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-64"
          />
        </section>
      )}
    </div>
  );
};

export default Details;
