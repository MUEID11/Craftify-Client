import { Link } from "react-router-dom";

const ArtCraftCard = ({ category }) => {
  const { itemName, photo, subcategory } = category;
  return (
    <div>
      <div className="w-full h-72 shadow-xl card">
        <figure>
          <img src={photo} alt="Shoes" className=" w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{subcategory}</h2>
          <p>{itemName}</p>
          <div className="card-actions justify-end">
            <Link to={`/cat/${subcategory}`}>
              <button className="btn btn-primary">View Items</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCraftCard;
