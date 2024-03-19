const List = (props) => {
	return props.list.map((item, index) => {
		return (
			<ul key={index}>
				<li
					className="eachNumber"
					onClick={() => {
						props.clickedNumber(item);
					}}>
					{item}
				</li>
			</ul>
		);
	});
};
export default List;
