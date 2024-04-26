import React, { useState } from "react";

function AddCraftItemPage() {
  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    subcategoryName: "",
    shortDescription: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
    userEmail: "",
    userName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
  };

  return (
    <div className="p-4 bg-dark dark:text-white container mx-auto">
      <div className="text-center mb-8">
      <h1 className="text-xl sm:text-3xl font-bold mb-4">Add Craft Item</h1>
      <p>Craftsmanship thrives in brevity. Please adorn each field with your creative essence, aiming for two lines of enchanting detail.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="userEmail">User Email</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="subcategoryName">Subcategory Name</label>
            <input
              type="text"
              id="subcategoryName"
              name="subcategoryName"
              value={formData.subcategoryName}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="stockStatus">Stock Status</label>
            <select
              id="stockStatus"
              name="stockStatus"
              value={formData.stockStatus}
              onChange={handleChange}
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
              value={formData.shortDescription}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            ></textarea>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="customization">Customization</label>
            <select
              id="customization"
              name="customization"
              value={formData.customization}
              onChange={handleChange}
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
              value={formData.processingTime}
              onChange={handleChange}
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

export default AddCraftItemPage;
