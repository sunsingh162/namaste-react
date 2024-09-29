import { useEffect, useState } from "react";
import { RES_API_URL } from "./constants";

const useRestaurantLists = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_API_URL);
      const json = await data.json();
      const swiggyResLists =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(swiggyResLists);
    } catch (err) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  };
  return { listOfRestaurants, loading };
};

export default useRestaurantLists;
