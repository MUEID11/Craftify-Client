import { useEffect, useState } from "react";
import { BiComment, BiHeart, BiStar } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

const SubCategories = () => {
  const { id } = useParams();
  const [cats, setCats] = useState([]);
  console.log(cats);
  useEffect(() => {
    fetch(`https://b9-assignment10-server-zeta.vercel.app/cat/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCats(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div className="container mx-auto grid md:grid-cols-3 gap-8 my-16">
      {cats.map((cat) => (
        <div
          key={cat._id}
          className="flex flex-col max-w-lg p-6 space-y-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800"
        >
          <h2 className="mb-1 text-xl font-semibold">{cat.itemName}</h2>
          <div className="flex space-x-4"></div>
          <div>
            <img
              src={cat.photo}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />

            <p className=" dark:text-gray-600">{cat.shortDescription}...</p>
            <p className="text-sm dark:text-gray-600 font-bold mt-2">
              {cat.subcategory}
            </p>
            <p className="text-sm dark:text-gray-600 font-bold">
              Price: {cat.price}
            </p>
            <p className="text-sm dark:text-gray-600 font-bold">
              Processing time: {cat.processingTime}
            </p>
            <p className="text-sm dark:text-gray-600">
              Stock Status: {cat.stockStatus}
            </p>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600 text-white">
            <Link to={`/details/${cat._id}`}>
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5 bg-green-500 px-4 py-2 rounded"
              >
                View Details
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-between ">
            <div className="space-x-2">
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
                <BiStar />
                <span>{cat.rating}</span>
              </button>
            </div>
            <div className="flex space-x-2 text-sm dark:text-gray-600">
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
                <BiComment />
                <span>30</span>
              </button>
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
                <BiHeart />
                <span>283</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCategories;
