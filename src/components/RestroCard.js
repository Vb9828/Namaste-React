import { RES_LOGO_URL } from "../utils/common";

const RestroCardComponent = (props) => {
	const { resData } = props;

	const { cloudinaryImageId, cuisines, name, avgRating, costForTwo, sla } =
		resData?.info;
	return (
		<div
			className="m-4 p-4 w-[300px] break-words rounded-lg font-semibold"
			style={{ backgroundColor: "#f0f0f0" }}>
			<img
				className="res-logo rounded-lg"
				src={RES_LOGO_URL + cloudinaryImageId}
				alt="Biryani image"></img>
			<h3 className="font-bold py-2 text-lg">{name}</h3>
			<h3>{cuisines.join(",")}</h3>
			<h3>{avgRating + " stars"}</h3>
			<h3>{costForTwo}</h3>
			<h3>{sla.slaString}</h3>
		</div>
	);
};

export default RestroCardComponent;
