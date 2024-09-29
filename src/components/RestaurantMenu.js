import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //fetching data component logic through custom Hook
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) return <Shimmer />;

  const { name, sla, avgRating, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;
    console.log(resInfo?.data?.cards[4]);

  // const { itemCards } =
  //   resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  // console.log(resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const filteredMenu =
    resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (menu) =>
        menu?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("Filtered Menu:", filteredMenu);

    const handleSetShowIndex = (index) => {
    setShowIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p>{sla?.slaString}</p>
      <h3>
        Rating - {avgRating} , {costForTwoMessage}
      </h3>
      <h5 className="font-bold text-lg">{cuisines.join(", ")}</h5>

      <h2>Menu</h2>
      {filteredMenu.map((menu,index) => (
        //Accordion
        <RestaurantCategory
          key={menu.card.card.id || menu.card.card.title}
          data={menu?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => handleSetShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
