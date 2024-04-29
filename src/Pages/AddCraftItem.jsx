import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

function AddCraftItem() {
  const { user } = UseAuth();
  const [subCategory, setSubCategory] = useState([]);
  const handleSubmit = (e) => {
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
    const formData = {
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
    // Implement your form submission logic here
    console.log(formData);
    fetch("http://localhost:5000/allart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Item added succesfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/sub_category")
      .then((res) => res.json())
      .then((subdata) => {
        console.log(subdata);
        setSubCategory(subdata);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="p-4 bg-dark dark:text-white container mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-3xl font-bold mb-4">Add Craft Item</h1>
        <p>
          Craftsmanship thrives in brevity. Please adorn each field with your
          creative essence, aiming for two lines of enchanting detail.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
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
              type="text"
              id="photo"
              name="photo"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="itemName">Item Name</label>
            <input
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
              id="shortDescription"
              name="shortDescription"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            ></textarea>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
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
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCraftItem;
