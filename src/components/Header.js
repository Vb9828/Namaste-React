import { useContext, useState } from "react";
import { APP_LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
	const [btnName, setBtnName] = useState("Login");
	const onlineStatus = useOnlineStatus();
	const data = useContext(UserContext);
	console.log(data);

	//Subscribing to the store using a
	const cart = useSelector((store) => store.cart.items);
	return (
		<div className="flex h-40 justify-between bg-pink-50 shadow-lg">
			<div className="w-40">
				<img src={APP_LOGO_URL} className="logo"></img>
			</div>
			<div className="flex items-center">
				<ul className="flex p-4 m-4 text-xl font-medium">
					<li className="px-4">Online Status: {onlineStatus ? "✔" : "🔴"}</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4 font-bold">Cart (0 items)</li>
					<button
						className="px-4"
						onClick={() => {
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
							console.log(btnName);
						}}>
						{btnName}
					</button>
					<li className="px-4 font-bold">{data.loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default HeaderComponent;
