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
				"x-cors-api-key": "temp_97339c1cf2bf2bf4bf0fefb42d216b1a",
			},
		});

		const json = await data.json();
		setResInfo(json);
		console.log(json);
	};
	return resInfo;
};

export default useRestaurantMenu;
