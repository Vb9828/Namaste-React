import { useState } from "react";
import { DOWN_ICON_URL } from "../utils/common";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
	const handleClick = () => {
		setShowIndex();
	};
	const { data, showItems, setShowIndex, showIndex } = props;
	return (
		<div>
			{/*Header*/}
			<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
				<div
					className="flex justify-between cursor-pointer"
					onClick={() => {
						handleClick();
						console.log(showIndex);
					}}>
					<span className="font-bold text-lg">
						{data.title} ({data.itemCards.length})
					</span>
					<span className="bg-gray-50">
						<img
							className="bg-gray-50 w-7 bg-blend-color right-56"
							src={DOWN_ICON_URL}
						/>
					</span>
				</div>
				{/*Accordion Body*/}
				<div>{showItems && <ItemList items={data.itemCards} />}</div>
			</div>
		</div>
	);
};

export default RestaurantCategory;
