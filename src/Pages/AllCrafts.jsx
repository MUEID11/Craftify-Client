import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllCrafts = () => {
  const [loading, setLoading] = useState(true);
  const [craftItem, setCraftsItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allart")
      .then((res) => res.json())
      .then((crafts) => {
        setCraftsItem(crafts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="relative h-screen flex items-center justify-center">
          <span className="loading loading-ring loading-xs text-primary absolute translate-y-5"></span>
        </div>
      ) : (
        <div className="overflow-x-auto mt-16">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            {craftItem.map((item) => (
              <tbody key={item?._id}>
                {/* row 1 */}
                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-sm">details</button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default AllCrafts;
