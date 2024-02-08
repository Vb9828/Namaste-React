import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
const RestroMenu = () => {
	const { resId } = useParams();

	const menuItems = useRestaurantMenu(resId);

	if (menuItems === null) return <ShimmerUI />;
	const { name, cuisines, costForTwoMessage } =
		menuItems?.data?.cards[0]?.card?.card?.info;

	const { itemCards } =
		menuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
			?.card?.card;

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) {
		return <h1>Please check your internet connection.</h1>;
	}
	return menuItems === null ? (
		<ShimmerUI />
	) : (
		<div className="menu">
			<h1>{name}</h1>
			<h2>
				{cuisines.join(", ")} - {costForTwoMessage}
			</h2>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name} - {"Rs."}
						{item.card.info.price / 100 || item.card.info.defaultprice / 100}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestroMenu;
