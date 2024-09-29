import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    // setShowItems(!showItems)
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data?.title}
            {data?.itemCards && <span>({data?.itemCards?.length})</span>}
          </span>
          <span>🔽</span>
        </div>

        {showItems && <ItemsList subData={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
