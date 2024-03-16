import { useState } from "react";

const BasicList = () => {
	let items = [
		{
			id: 456191,
			name: "Idli",
		},
		{
			id: 162311,
			name: "Dosa",
		},
		{
			id: 861821,
			name: "Poori",
		},
		{
			id: 826261,
			name: "Coffee",
		},
	];

	const [id, setId] = useState(null);

	return (
		<div>
			{items.map((item) => {
				return (
					<ul key={item.id}>
						<li
							className=" m-4 p-4"
							style={{
								border: "2px solid black",
								cursor: "pointer",
								borderColor: item.id === id ? "blue" : "gray",
							}}
							onClick={() => setId(item.id)}>
							{item.name}
						</li>
					</ul>
				);
			})}
		</div>
	);
};
export default BasicList;
