import { useState, useEffect } from "react";

const Todos1 = () => {
	const [todoList, setTodoList] = useState(null);

	const fetchTodo = async () => {
		const todos = await fetch("https://dummyjson.com/todos");
		const json = await todos.json();
		setTodoList(json.todos);
	};

	var completed = todoList?.filter((item) => item?.completed == true);
	var incompleteCount = todoList?.length - completed?.length;
	console.log(completed?.length, incompleteCount);

	useEffect(() => {
		fetchTodo();
	}, []);

	if (todoList?.length > 0) {
		return (
			<div className="m-4 p-4 items-center">
				<div className="m-4 p-4">
					No. of Completed Todos: {completed?.length}
				</div>
				<div className="m-4 p-4">
					No.of not completed Todos: {incompleteCount}
				</div>
				<div className="m-4 p-4">
					{todoList?.map((item) => {
						return (
							<ul key={item?.id}>
								<li>{item?.todo}</li>
							</ul>
						);
					})}
				</div>
			</div>
		);
	}
};

export default Todos1;
