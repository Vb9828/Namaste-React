import RestroCardComponent from "./RestroCard";
import { useState, useEffect } from "../../node_modules/react";
import ShimmerUI from "./ShimmerUI";

const BodyComponent = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState("");
	const [searchText, setSearchText] = useState("");
	const [filteredRestaurants, setFilteredRestaurants] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.920375&lng=77.509163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
			{
				headers: {
					"x-cors-api-key": "temp_55d54ed9ec87dbe6717d51209208a1bd",
				},
			}
		);

		const json = await data.json();

		setListOfRestaurants(
			json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
		);
		setFilteredRestaurants(
			json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
		);
		console.log(json);
	};

	return listOfRestaurants.length === 0 ? (
		<ShimmerUI />
	) : (
		<div className="body">
			<div className="search">
				<input
					type="text"
					className="search-box"
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				/>
				<button
					className="search-btn"
					onClick={() => {
						const filterRes = listOfRestaurants.filter((res) =>
							res.info.name.toLowerCase().includes(searchText.toLowerCase())
						);
						setFilteredRestaurants(filterRes);
					}}>
					Search
				</button>
			</div>
			<button
				className="filter-btn"
				onClick={() => {
					const filteredList = listOfRestaurants.filter(
						(res) => res.info.avgRating > 4
					);
					setFilteredRestaurants(filteredList);
				}}>
				Top Rated Restaurants
			</button>
			<div className="res-container">
				{filteredRestaurants.map((res) => (
					<RestroCardComponent key={res.info.id} resData={res} />
				))}
			</div>
		</div>
	);
};

export default BodyComponent;
