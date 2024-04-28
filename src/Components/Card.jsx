import { Link } from "react-router-dom";

const Card = ({card}) => {
    const {_id, itemName, stockStatus , photo, shortDescription} = card;
  return (
    <div>
      <div className="card w-full glass">
        <figure>
          <img
          className="h-[300px] w-full cover"
            src={photo}
            alt={itemName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p className="font-semibold">{stockStatus}</p>
          <p className="text-sm">{shortDescription}</p>
          <div className="card-actions justify-end">
            <Link to={`details/${_id}`}>
            <button className="btn btn-primary">View details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
