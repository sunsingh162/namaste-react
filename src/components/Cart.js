import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-4 text-xl font-bold">
      <h1>Cart</h1>
      <div>
        <button
          className="border border-orange font-bold hover:bg-orange-300 p-2 m-2 rounded-lg shadow-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1 className="text-gray-400 my-4">Your Cart is empty, Please Add items</h1>}
      </div>
      <div className="w-6/12 m-auto">
        <ItemsList subData={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
