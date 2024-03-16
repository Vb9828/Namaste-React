import { useState } from "react";

const InputComponent = () => {
	const [input, setInput] = useState("");

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	input.length > 10 ? alert("Max length exceeded") : "";

	return (
		<div>
			<input
				type="text"
				className="m-4 p-4 border box-border shadow-lg"
				value={input}
				onChange={handleInput}
			/>
			<button
				type="submit"
				onClick={() => {
					alert(input);
				}}>
				Submit
			</button>
		</div>
	);
};

export default InputComponent;
