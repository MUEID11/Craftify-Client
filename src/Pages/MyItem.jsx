import { BiComment, BiHeart, BiStar } from "react-icons/bi";


const MyItem = ({craft}) => {
    const {
        photo,
        itemName,
        shortDescription,
        subcategory,
        price,
        processingTime,
        stockStatus,
        rating,
      } = craft;
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
            </div>
            <div className="flex space-x-2 text-sm dark:text-gray-600 text-white">
                <button type="button" className="flex items-center p-1 space-x-1.5 bg-green-500 px-4 py-2 rounded">
                 Update
                </button>
                <button type="button" className="flex items-center p-1 space-x-1.5 bg-red-500 px-4 py-2 rounded">
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

export default MyItem;