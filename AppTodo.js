import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { removeItem } from "./src/utils/cartSlice";

const Appcomponent = () => {
	const [input, setInput] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [selectedId, setSelectedId] = useState(null);
	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const fetchList = async () => {
		const data = await fetch("https://dummyjson.com/todos");
		const json = await data.json();
		setTodoList(json.todos);
	};

	useEffect(() => {
		fetchList();
	}, []);

	const addItem = () => {
		if (!selectedId) {
			const obj = {
				id: todoList.length + 1,
				todo: input,
				completed: false,
			};

			setTodoList([...todoList, obj]);
			setInput("");
		} else {
			const updatedItems = todoList.map((item) =>
				item.id === selectedId ? { ...item, todo: input } : item
			);
			setTodoList(updatedItems);
			setSelectedId(null);
			setInput("");
		}
	};

	const removeItem = (id) => {
		const items = todoList.filter((obj) => obj.id != id);
		setTodoList(items);
		setInput("");
	};

	const updateItem = (id) => {
		const obj = todoList.find((item) => item.id == id);
		console.log(obj);
		setInput(obj.todo);
		setSelectedId(id);
	};

	const doneItem = (id) => {
		const doneItems = todoList.map((obj) =>
			obj.id === id ? { ...obj, completed: !obj.completed } : obj
		);

		setTodoList(doneItems);
	};

	return (
		<div className=" m-4 p-4 bg-red-50 justify-center items-center">
			<input
				type="text"
				className="border border-b-black  shadow-lg"
				value={input}
				onChange={handleInput}
			/>
			<button className=" my-4 py-4 border border-b-black" onClick={addItem}>
				{selectedId ? "update" : "add"}
			</button>
			<div className="">
				{todoList.map((item) => {
					return (
						<ul key={item.id}>
							<li>
								<div
									onClick={() => {
										updateItem(item.id);
									}}
									className={`${
										item.completed ? "bg-green-100" : "bg-gray-100"
									}`}>
									{item.todo}
								</div>
								<button
									className=" my-4 py-4 border border-b-black"
									onClick={() => {
										removeItem(item.id);
									}}>
									Remove
								</button>
								<button
									className="my-4 py-4 border border-b-black"
									onClick={() => {
										doneItem(item.id);
									}}>
									{item.completed ? "Undo" : "Done"}
								</button>
							</li>
						</ul>
					);
				})}
			</div>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcomponent />);
