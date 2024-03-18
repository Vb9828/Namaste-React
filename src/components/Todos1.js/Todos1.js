import { useState, useEffect } from "react";

const Todos1 = () => {
	const [todoList, setTodoList] = useState([]); //---

	const fetchTodos = async () => {
		//-----todos
		const todos = await fetch("https://dummyjson.com/todos");
		const json = await todos.json();
		setTodoList(json.todos);
	};

	var completed = todoList.filter((item) => item.completed); //----let and ? is == true required
	var notCompleted = todoList.filter((item) => !item.completed);
	console.log(completed.length, notCompleted.length);

	useEffect(() => {
		fetchTodos();
	}, []);

	if (todoList?.length > 0) {
		return (
			<div className="m-4 p-4 items-center">
				<div className="m-4 p-4">
					No. of Completed Todos: {completed.length}
				</div>
				<div className="m-4 p-4">
					No.of not completed Todos: {notCompleted.length}
				</div>
				<div className="m-4 p-4">
					{todoList.map((item) => {
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
