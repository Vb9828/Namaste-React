import { RES_LOGO_URL } from "../utils/common";

const ItemList = ({ items }) => {
	return (
		<div>
			<div>
				{items.map((item) => (
					<div
						key={item.card.info.id}
						className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
						<div className="w-9/12">
							<div className="py-2 font-semibold text-lg">
								<span>{item.card.info.name}</span>
								<br />
								<span>
									₹
									{item.card.info.price
										? item.card.info.price / 100
										: item.card.info.defaultPrice / 100}
								</span>
							</div>
							<p className="text-sm">{item.card.info.description}</p>
						</div>

						<div className="w-3/12 p-4">
							<div className="p-2 mx-16 my-auto bg-black text-white shadow-lg rounded-lg absolute">
								<button>+ Add</button>
							</div>
							<img src={RES_LOGO_URL + item.card.info.imageId} alt=""></img>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ItemList;
