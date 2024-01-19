import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./resList.js";
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 * - RestaurantCard
 *    - Image
 *    - Name of the res, star rating, cuisines,
 * Footer
 * - Copyrights
 * - Links
 * - Address
 * - Contact
 */

const HeaderComponent = () => {
	return (
		<div className="header">
			<div className="LogoItem">
				<img
					src="https://marketplace.canva.com/EAFowthFsE4/1/0/1600w/canva-brown-catering-flat-illustrative-food-place-logo-nj2QCY2r3B8.jpg"
					className="logo"></img>
			</div>
			<div className="navItems">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const RestroCardComponent = (props) => {
	console.log(props);

	const { resData } = props;
	return (
		<div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
			<img
				className="res-logo"
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					resData.info.cloudinaryImageId
				}
				alt="Biryani image"></img>
			<h3>{resData.info.name}</h3>
			<h3>{resData.info.cuisines.join(",")}</h3>
			<h3>{resData.info.avgRating + " stars"}</h3>
			<h3>{resData.info.costForTwo}</h3>
			<h3>{resData.info.deliveryTime + " mins"}</h3>
		</div>
	);
};

const BodyComponent = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				{resList.map((res) => (
					<RestroCardComponent resData={res} />
				))}
			</div>
		</div>
	);
};
const Appcomponent = () => {
	return (
		<div id="container">
			<HeaderComponent />
			<BodyComponent />
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcomponent />);
