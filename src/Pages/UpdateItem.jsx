import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function UpdateItem() {
  const { id } = useParams();
  const { user } = UseAuth();
  const [updateItem, setUpdateItem] = useState({});
  const {
    photo,
    itemName,
    shortDescription,
    price,
    rating,
    stockStatus,
    processingTime,
  } = updateItem;
  const [subCategory, setSubCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/update/${id}`)
      .then((res) => res.json())
      .then((item) => {
        console.log(item);
        setUpdateItem(item);
      })
      .catch((error) => {
        error.message;
      });
  }, [id]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const itemName = form.itemName.value;
    const subcategory = form.subcategory.value;
    const stockStatus = form.stockStatus.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const updateInfo = {
      email,
      name,
      photo,
      itemName,
      subcategory,
      stockStatus,
      shortDescription,
      price,
      rating,
      customization,
      processingTime,
    };
    fetch(`http://localhost:5000/updateitem/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
        setUpdateItem(updateInfo)
          Swal.fire({
            title: "Item updated!",
            text: "Your item is updated!",
            icon: "success",
          });
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/sub_category")
      .then((res) => res.json())
      .then((subdata) => {
        setSubCategory(subdata);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="p-4 bg-dark dark:text-white container mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-3xl font-bold mb-4">
          Update Craft Item
        </h1>
        <p>
          Craftsmanship thrives in brevity. Please adorn each field with your
          creative essence, aiming for two lines of enchanting detail.
        </p>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              disabled
              defaultValue={user?.displayName}
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="userEmail">User Email</label>
            <input
              disabled
              defaultValue={user?.email}
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="photo">Image URL</label>
            <input
              defaultValue={photo}
              type="text"
              id="photo"
              name="photo"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="itemName">Item Name</label>
            <input
              defaultValue={itemName}
              type="text"
              id="itemName"
              name="itemName"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="subcategoryName">Subcategory Name</label>
            <select
              id="subcategory"
              name="subcategory"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            >
              {subCategory.map((sub) => (
                <option key={sub?._id} value={sub?.name}>
                  {sub?.subcategory}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="stockStatus">Stock Status</label>
            <select
              defaultValue={stockStatus}
              id="stockStatus"
              name="stockStatus"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            >
              <option value="In stock">In stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="shortDescription">Short Description</label>
            <textarea
              defaultValue={shortDescription}
              id="shortDescription"
              name="shortDescription"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            ></textarea>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              defaultValue={price}
              type="text"
              id="price"
              name="price"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              defaultValue={rating}
              type="text"
              id="rating"
              name="rating"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="customization">Customization</label>
            <select
              id="customization"
              name="customization"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="processingTime">Processing Time</label>
            <input
              defaultValue={processingTime}
              type="text"
              id="processingTime"
              name="processingTime"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
        </div>
          <button
            type="submit"
            className="bg-violet-500 hover:bg-violet-700 w-full text-white font-bold py-2 px-4 rounded mt-4"
          >
            Update
          </button>
      </form>
    </div>
  );
}

export default UpdateItem;
