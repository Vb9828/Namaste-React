import { useState } from "react";
import { APP_LOGO_URL } from "../utils/common";

const HeaderComponent = () => {
	const [btnName, setBtnName] = useState("Login");

	return (
		<div className="header">
			<div className="LogoItem">
				<img src={APP_LOGO_URL} className="logo"></img>
			</div>
			<div className="navItems">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
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
