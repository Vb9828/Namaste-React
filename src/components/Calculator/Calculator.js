import { useState } from "react";
import "./Calculator.css";
import List from "./List";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/"];
const Calculator = () => {
	const [input, setInput] = useState("");
	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const clickedNumber = (num) => {
		let newInput = input + num;
		setInput(newInput);
	};

	const calculate = () => {
		let result = eval(input);
		setInput(result);
	};

	const clearInput = () => {
		setInput("");
	};

	return (
		<div className="main">
			<div>
				<input
					className="input"
					type="text"
					value={input}
					onChange={handleInput}
				/>
				<button type="submit" className="button" onClick={calculate}>
					Calculate
				</button>
				<button type="submit" className="button" onClick={clearInput}>
					Clear
				</button>
			</div>
			<div className="options">
				<div className="numbers">
					<List list={numbers} clickedNumber={clickedNumber} />
				</div>
				<div className="operators">
					<List list={operators} clickedNumber={clickedNumber} />
				</div>
			</div>
		</div>
	);
};
export default Calculator;
