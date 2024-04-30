import { useEffect, useState } from "react";
import Card from "../Components/Card";

const CraftItems = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://b9-assignment10-server-zeta.vercel.app/allart/limited")
      .then((res) => res.json())
      .then((card) => {
        setCards(card);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container mx-auto sm:my-24 my-6">
      <h2 className="my-8 lg:my-16 text-center text-4xl font-bold">
        Crafts Items
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="relative flex items-center justify-center">
            <span className="loading loading-ring loading-xs text-primary absolute translate-y-5"></span>
          </div>
        ) : (
          cards.map((card) => <Card key={card._id} card={card}></Card>)
        )}
      </div>
    </div>
  );
};

export default CraftItems;
