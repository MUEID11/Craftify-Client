import UseAuth from "../hooks/UseAuth";
import { useEffect, useState } from "react";
import MyItem from "./MyItem";
import { Link} from "react-router-dom";
import { Helmet } from "react-helmet";

const MyCrafts = () => {
  const [loading, setLoading] = useState(true);
  const { user } = UseAuth();
  const [myCrafts, setMyCrafts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/mycraft/${user?.email}`)
      .then((res) => res.json())
      .then((items) => {
        setMyCrafts(items);
        setLoading(false);
        console.log(items);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [user]);
  return (
    <div className="sm:my-12 min-h-screen">
      <Helmet>
        <title>My Crafts</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">
        My Arts and Crafts
      </h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {!loading ? (
          myCrafts.map((craft) => (
            <MyItem key={craft?._id} craft={craft}></MyItem>
          ))
        ) : (
          <>
            (<>loading....</>)
          </>
        )}
        {myCrafts.length === 0 && !loading && (
            <div className="container mx-auto col-span-3 text-center text-5xl">
                <div className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-2 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co/L5QL0zs/49451dbms1.jpg" alt="" className="cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">No Data 
				<span className="dark:text-violet-600"> Found Add Data</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Add your beautiful crafts and arts
				<br  className="hidden md:inline lg:hidden" />Showcase and Sell your items
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to="/addcraft" type="button" className="px-8 py-3 text-lg font-semibold rounded bg-violet-500 dark:bg-violet-600 dark:text-gray-50">Add Items</Link>
				<Link to="/allart" type="button"  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">All Items</Link>
			</div>
		</div>
	</div>
</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCrafts;
