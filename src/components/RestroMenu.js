import ShimmerUI from "./ShimmerUI";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
const RestroMenu = () => {
	const { resId } = useParams();
	const [showIndex, setShowIndex] = useState(null);
	const onlineStatus = useOnlineStatus();
	const menuItems = useRestaurantMenu(resId);
	const [activeMenu, setActiveMenu] = useState(null);

	if (menuItems === null) return <ShimmerUI />;
	const { name, cuisines, costForTwoMessage } =
		menuItems?.data?.cards[0]?.card?.card?.info;

	// const { itemCards } =
	// 	menuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
	// 		?.card?.card;

	const categories =
		menuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	if (onlineStatus === false) {
		return <h1>Please check your internet connection.</h1>;
	}
	return menuItems === null ? (
		<ShimmerUI />
	) : (
		<div className="text-center">
			<h1 className="font-bold my-6 text-2xl">{name}</h1>
			<h2 className="font-bold text-lg">
				{cuisines.join(", ")} - {costForTwoMessage}
			</h2>
			{categories.map((category, index) => (
				<RestaurantCategory
					key={category?.card?.card.title}
					data={category?.card?.card}
					showItems={index === showIndex ? true : false}
					setShowIndex={() => {
						showIndex === index ? setShowIndex(-1) : setShowIndex(index);
					}}
					setActiveMenu={setActiveMenu}
					activeMenu={activeMenu}
					showIndex={showIndex}
				/>
			))}
		</div>
	);
};

export default RestroMenu;
