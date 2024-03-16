import { useState, useEffect } from "react";
import TodoList from "./TodoList";

const Todos2 = () => {
	const [todoList, setTodoList] = useState(null);

	const fetchTodo = async () => {
		const todos = await fetch("https://dummyjson.com/todos");
		const json = await todos.json();
		setTodoList(json.todos);
	};

	const fetchTodoById = async (id) => {
		const todos = await fetch("https://dummyjson.com/todos/" + id);
		const json = await todos.json();
		console.log("https://dummyjson.com/todos/" + id);
		setTodoList(json);
	};

	useEffect(() => {
		fetchTodo();
	}, []);

	return (
		<div className="m-4 p-4 items-center">
			<div className="m-4 p-4">
				{todoList?.length > 0
					? todoList?.map((item) => {
							return (
								<ul key={item.id}>
									<li
										onClick={() => {
											fetchTodoById(item.id);
										}}>
										{item.todo}
									</li>
								</ul>
							);
					  })
					: todoList?.todo}
			</div>
		</div>
	);
	<div className="m-4 p-4 items-center">
		<div className="m-4 p-4">{todoList?.todo}</div>
	</div>;
};

export default Todos2;
