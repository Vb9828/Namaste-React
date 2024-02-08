import { useState } from "react";
import { APP_LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
	const [btnName, setBtnName] = useState("Login");
	const onlineStatus = useOnlineStatus();
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
					<li className="px-4">Cart</li>
					<button
						className="px-4"
						onClick={() => {
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
							console.log(btnName);
						}}>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default HeaderComponent;
