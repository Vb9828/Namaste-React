import { useState } from "react";

const getBorderColor = (list, id, selected) => {
	console.log(list, id, selected);
	let l1 = list.map((item) => item.id);
	if (l1.includes(id)) {
		let obj = list.find((item) => item.id == id);
		return obj.isCorrect ? "green" : "red";
	}
	return "gray";
};

let selectedList = [];

const Quiz = () => {
	let questions = [
		{
			id: "1",
			question: "What is the capital of France?",
			options: [
				{ key: "a", option: "London" },
				{ key: "b", option: "Paris" },
				{ key: "c", option: "Berlin" },
				{ key: "d", option: "Rome" },
			],
		},
		{
			id: "2",
			question: "Which planet is known as the Red Planet?",
			options: [
				{ key: "a", option: "Mars" },
				{ key: "b", option: "Venus" },
				{ key: "c", option: "Jupiter" },
				{ key: "d", option: "Saturn" },
			],
		},
		{
			id: "3",
			question: "What is the chemical symbol for water?",
			options: [
				{ key: "a", option: "H2O" },
				{ key: "b", option: "CO2" },
				{ key: "c", option: "NaCl" },
				{ key: "d", option: "NH3" },
			],
		},
	];

	let answers = [
		{ id: "1", answer: "b" }, // Answer to question 1 is option 'b'
		{ id: "2", answer: "a" }, // Answer to question 2 is option 'a'
		{ id: "3", answer: "a" }, // Answer to question 3 is option 'a'
	];

	const [color, setColor] = useState("");
	const [selectedOpt, setSelectedOpt] = useState({});
	const [alreadySelected, setAlreadySelected] = useState(false);

	const handleAnswer = (id, key) => {
		let selectedIds = selectedList.map((item) => item.id);
		if (!selectedIds.includes(id)) {
			console.log(id, key);
			const correctAns = answers.find((item) => id == item.id);
			console.log(correctAns);
			// correctAns.answer == key ? (isCorrect = true) : (isCorrect = false);
			const isCorrect = correctAns.answer == key;
			let obj = {};
			obj.id = id;
			obj.isCorrect = isCorrect;
			setSelectedOpt(obj);
			selectedList.push(obj);
		}
	};
	console.log(selectedList, selectedOpt);

	//calling
	return (
		<div>
			{questions.map((item) => {
				return (
					<div key={item.id}>
						<div
							style={{
								border: "2px solid black",
								borderColor: getBorderColor(selectedList, item.id, selectedOpt),
								margin: "10px",
								padding: "10px",
							}}>
							<label>{item.question}</label>
						</div>
						<div>
							<ul>
								{item.options.map((option) => {
									return (
										<li
											key={option.key}
											onClick={() => {
												handleAnswer(item.id, option.key);
											}}>
											{option.key}. {option.option}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Quiz;
