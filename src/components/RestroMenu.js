import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/common";
const RestroMenu = () => {
	const [menuItems, setMenuItems] = useState(null);
	const { resId } = useParams();
	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_URL + resId, {
			headers: {
				"x-cors-api-key": "temp_55d54ed9ec87dbe6717d51209208a1bd",
			},
		});

		const json = await data.json();

		console.log(json);

		//const reqdData = json.data.cards[0].card.card.info;
		setMenuItems(json);
	};

	if (menuItems === null) return <ShimmerUI />;
	const { name, cuisines, costForTwoMessage } =
		menuItems?.data?.cards[0]?.card?.card?.info;

	const { itemCards } =
		menuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
			?.card?.card;
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
