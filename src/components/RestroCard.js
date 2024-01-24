import { RES_LOGO_URL } from "../utils/common";

const RestroCardComponent = (props) => {
	const { resData } = props;
	return (
		<div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
			<img
				className="res-logo"
				src={RES_LOGO_URL + resData.info.cloudinaryImageId}
				alt="Biryani image"></img>
			<h3>{resData.info.name}</h3>
			<h3>{resData.info.cuisines.join(",")}</h3>
			<h3>{resData.info.avgRating + " stars"}</h3>
			<h3>{resData.info.costForTwo}</h3>
			<h3>{resData.info.sla.slaString}</h3>
		</div>
	);
};

export default RestroCardComponent;
