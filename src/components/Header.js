import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const [isDarkMode, setDarkMode] = useState(false);

  const store = useSelector((state) => state.cart.items);
  console.log(store);

  // If no dependancy array => useEffect called on every render
  // If dependancy array is empty [] => useEffect is called on initial render(once)
  useEffect(() => {
    // console.log("useeffect render");
    // document.body.style.backgroundColor = "black"
  }, []);

  // const toggleDarkMode = () => {

  // }
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-100 shadow-xl m-2 sm:bg-yellow-50 lg:bg-gray-100 h-40">
      <div className="logo-container">
        <img className="w-52" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 mx-8">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 font-semibold hover:text-orange-400">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4  font-semibold hover:text-orange-400">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 font-semibold hover:text-orange-400">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 font-semibold hover:text-orange-400">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold hover:text-orange-400">
            <Link to="/cart">Cart - {store.length} items</Link>
          </li>
        </ul>
        <div className="m-4">
          <button
            className="border border-gray-400 p-2 rounded-lg hover:bg-orange-400 font-bold"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <p className="">
            {loggedInUser !== "" && `Welcome, ${loggedInUser}`}
          </p>
        </div>
        {/* <div className="my-2 px-6">
          <DarkModeSwitch
            size={40}
            checked={isDarkMode}
            onChange={()=>setDarkMode(!isDarkMode)}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
