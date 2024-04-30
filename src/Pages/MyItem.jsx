import { BiComment, BiHeart, BiStar } from "react-icons/bi";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyItem = ({ craft, remaining, setRemaining }) => {
  const {
    _id,
    photo,
    itemName,
    shortDescription,
    subcategory,
    price,
    processingTime,
    stockStatus,
    rating,
    customization,
  } = craft;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b9-assignment10-server-zeta.vercel.app/deleteitem/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setRemaining(!remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-1 text-xl font-semibold">{itemName}</h2>
        <div className="flex space-x-4"></div>
        <div>
          <img
            src={photo}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />

          <p className=" dark:text-gray-600">{shortDescription}...</p>
          <p className="text-sm dark:text-gray-600 font-bold mt-2">
            {subcategory}
          </p>
          <p className="text-sm dark:text-gray-600 font-bold">Price: {price}</p>
          <p className="text-sm dark:text-gray-600 font-bold">
            Processing time: {processingTime}
          </p>
          <p className="text-sm dark:text-gray-600">
            Stock Status: {stockStatus}
          </p>
          <p className="text-sm dark:text-gray-600">
            Customization: {customization}
          </p>
        </div>
        <div className="flex space-x-2 text-sm dark:text-white text-gray-700">
          <Link to={`/updateCraft/${_id}`}>
            <button type="button" className="btn btn-sm sm:btn-md bg-green-600">
              Update
            </button>
          </Link>

          <button
            type="button"
            onClick={handleDelete}
            className="flex items-center btn btn-md space-x-1.5 bg-red-600 px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
        <div className="flex flex-wrap justify-between ">
          <div className="space-x-2">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <BiStar />
              <span>{rating}</span>
            </button>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <BiComment />
              <span>30</span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <BiHeart />
              <span>283</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyItem.propTypes = {
  MyItem: PropTypes.node,
  craft: PropTypes.node,
  remaining: PropTypes.node,
  setRemaining: PropTypes.node,

}
export default MyItem;
