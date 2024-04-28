const Card = ({card}) => {
    const {itemName, stockStatus , photo, shortDescription} = card;
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
            <button className="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
