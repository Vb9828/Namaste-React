import RestroCardComponent, { labelledComponent } from "./RestroCard";
import { useState, useEffect, useContext } from "../../node_modules/react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const BodyComponent = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState("");
	const [searchText, setSearchText] = useState("");
	const [filteredRestaurants, setFilteredRestaurants] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const { loggedInUser, setUserInfo } = useContext(UserContext);
	const RestroCardPromoted = labelledComponent(RestroCardComponent);
	const fetchData = async () => {
		const data = await fetch(
			"https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.480127897788517&lng=78.57794760320617&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
			{
				headers: {
					"x-cors-api-key": "temp_97339c1cf2bf2bf4bf0fefb42d216b1a",
				},
			}
		);

		const json = await data.json();
		const requiredData = json.data.cards.filter(
			(item) => item.card.card.id == "restaurant_grid_listing"
		);

		setListOfRestaurants(
			requiredData[0].card.card.gridElements.infoWithStyle.restaurants
		);

		setFilteredRestaurants(
			requiredData[0].card.card.gridElements.infoWithStyle.restaurants
		);
	};

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) {
		return <h1>Please check your internet connection.</h1>;
	}

	return listOfRestaurants.length === 0 ? (
		<ShimmerUI />
	) : (
		<div className="body">
			<div className="flex font-medium">
				<div className=" m-4 p-4">
					<input
						type="text"
						className="border border-black border-solid"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="m-4 px-4 py-2 bg-green-100 rounded-lg"
						onClick={() => {
							const filterRes = listOfRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setFilteredRestaurants(filterRes);
						}}>
						Search
					</button>
				</div>
				<div className="m-4 p-4">
					<button
						className="m-4 px-4 py-2 bg-gray-100 rounded-lg"
						onClick={() => {
							const filteredList = listOfRestaurants.filter(
								(res) => res.info.avgRating > 4
							);
							setFilteredRestaurants(filteredList);
						}}>
						Top Rated Restaurants
					</button>
				</div>
				<div className="m-4 p-4">
					<label>UserName : </label>
					<input
						className="m-4 px-4 py-2 border border-black rounded-lg"
						value={loggedInUser}
						onChange={(e) => setUserInfo(e.target.value)}></input>
				</div>
			</div>
			<div className="flex flex-wrap rounded-lg">
				{filteredRestaurants.map((res) => (
					<Link to={"/restaurants/" + res.info.id} key={res.info.id}>
						{res.info.isOpen ? (
							<RestroCardPromoted resData={res} />
						) : (
							<RestroCardComponent resData={res} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default BodyComponent;
