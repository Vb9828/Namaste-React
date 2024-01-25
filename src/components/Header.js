import { useState } from "react";
import { APP_LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
	const [btnName, setBtnName] = useState("Login");

	return (
		<div className="header">
			<div className="LogoItem">
				<img src={APP_LOGO_URL} className="logo"></img>
			</div>
			<div className="navItems">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>Cart</li>
					<button
						className="login"
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
