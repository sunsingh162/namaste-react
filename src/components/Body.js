import RestaurantCard, { withLabelRestaurant } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantLists from "../utils/useRestaurantLists";
import UserContext from '../utils/UserContext';

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const { listOfRestaurants, loading } = useRestaurantLists(); //used Custom Hook
  const [searchValue, setSearchValue] = useState("");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Pls check your internet</h1>;

  const LabeledRestaurant = withLabelRestaurant(RestaurantCard);

  useEffect(() => {
    if (listOfRestaurants.length) {
      setFilteredRestaurant(listOfRestaurants);
    }
  }, [listOfRestaurants]);

  const { loggedInUser, setUsername } = useContext(UserContext)
  
  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <label>Username:</label>
          <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUsername(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.discountTag ? (
              <LabeledRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
