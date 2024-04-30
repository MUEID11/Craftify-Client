import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCrafts = () => {
  const [loading, setLoading] = useState(true);
  const [craftItem, setCraftsItem] = useState([]);
  useEffect(() => {
    fetch("https://b9-assignment10-server-zeta.vercel.app/allart")
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
        <div className="overflow-x-auto my-6 sm:my-16">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Sub Category</th>
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
                      </div>
                      <div>
                        <div className="font-bold">{item?.itemName}</div>
                        <div className="text-sm opacity-50">{item?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.subcategory}</td>
                  <th>
                    <Link to={`/details/${item?._id}`}>
                      <button className="btn btn-ghost btn-sm">details</button>
                    </Link>
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
