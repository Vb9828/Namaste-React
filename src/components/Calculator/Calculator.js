import { useState } from "react";
import "./Calculator.css";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "x", "/"];
const Calculator = () => {
	const [input, setInput] = useState("");
	const handleInput = (e) => {
		setInput(e.target.value);
	};
	console.log(input);

	const clickedNumber = (num) => {
		if (clearInput) {
		}
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
					{numbers.map((number, index) => {
						return (
							<ul key={index}>
								<li
									className="eachNumber"
									onClick={() => {
										clickedNumber(number);
									}}>
									{number}
								</li>
							</ul>
						);
					})}
				</div>
				<div className="operators">
					{operators.map((operator, index) => {
						return (
							<ul key={index}>
								<li
									className="eachNumber"
									onClick={() => {
										clickedNumber(operator);
									}}>
									{operator}
								</li>
							</ul>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Calculator;
