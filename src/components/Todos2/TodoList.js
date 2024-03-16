const TodoList = (props) => {
	return (
		<div className="m-4 p-4">
			{props.items?.map((item) => {
				return (
					<ul key={item.id}>
						<li
							onClick={() => {
								props.fetchTodoById(item.id);
							}}>
							{item.todo}
						</li>
					</ul>
				);
			})}
		</div>
	);
};

export default TodoList;
