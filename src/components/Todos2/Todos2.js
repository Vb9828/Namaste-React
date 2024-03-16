import { useState, useEffect } from "react";
import TodoList from "./TodoList";

const Todos2 = () => {
	const [todoList, setTodoList] = useState(null);
	const [todoObj, setTodoObj] = useState(null);
	const [input, setInput] = useState("");
	const fetchTodo = async () => {
		const todos = await fetch("https://dummyjson.com/todos");
		const json = await todos.json();
		setTodoList(json.todos);
	};

	const fetchTodoById = async (id) => {
		const todos = await fetch("https://dummyjson.com/todos/" + id);
		const json = await todos.json();
		console.log("https://dummyjson.com/todos/" + id);
		setTodoObj(json);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const addToList = () => {
		var newItemObj = {};
		newItemObj.id = todoList.length + 1;
		newItemObj.todo = input;
		newItemObj.userId = "22";
		var newList = todoList.map((item) => item);
		newList.push(newItemObj);
		setTodoList(newList);
		console.log("added");
		setInput("");
	};

	useEffect(() => {
		fetchTodo();
	}, []);

	return (
		<div className="m-4 p-4 items-center">
			<div className="m-4 p-4">
				<input
					type="text"
					className="m-4 p-4 border border-black shadow-lg"
					value={input}
					onChange={handleInput}
				/>
				<button
					className="m-4 p-4 border border-black shadow-lg"
					onClick={addToList}>
					Add
				</button>
				<div>{todoObj != null ? todoObj.todo : ""}</div>
				{todoList?.map((item) => {
					return (
						<ul key={item.id}>
							<li
								className="m-2 p-2 border border-gray-50 shadow-md w-2"
								onClick={() => {
									fetchTodoById(item.id);
								}}>
								{item.todo}
							</li>
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default Todos2;
