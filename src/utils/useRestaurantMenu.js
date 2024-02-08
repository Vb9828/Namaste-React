import { useEffect, useState } from "react";
import { MENU_URL } from "./common";

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

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
		setResInfo(json);
	};
	return resInfo;
};

export default useRestaurantMenu;
