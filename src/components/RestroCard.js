import { useContext } from "react";
import { RES_LOGO_URL } from "../utils/common";
import UserContext from "../utils/UserContext";

const RestroCardComponent = (props) => {
	const { resData } = props;
	const user = useContext(UserContext);
	const { cloudinaryImageId, cuisines, name, avgRating, costForTwo, sla } =
		resData?.info;
	return (
		<div className="m-4 p-4 w-[300px] break-words rounded-lg font-semibold bg-gray-50 hover:bg-gray-200 hover:shadow-2xl">
			<img
				className="res-logo rounded-lg"
				src={RES_LOGO_URL + cloudinaryImageId}
				alt="Biryani image"></img>
			<h3 className="font-bold py-2 text-lg">{name}</h3>
			<h3>{cuisines.join(",")}</h3>
			<h3>{avgRating + " stars"}</h3>
			<h3>{costForTwo}</h3>
			<h3>{sla.slaString}</h3>
			<h3>{user.loggedInUser}</h3>
		</div>
	);
};

export const labelledComponent = (RestroCardComponent) => {
	return (props) => {
		return (
			<div>
				<label className=" absolute bg-black text-red-500 m-2 p-2 rounded-lg">
					Open
				</label>
				<RestroCardComponent {...props} />
			</div>
		);
	};
};

export default RestroCardComponent;
