import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

const titles = ["Words", "Characters", "Sentences", "Paragraphs"];

const AppComponent = (props) => {
	const [input, setInput] = useState("");
	const [input2, setInput2] = useState("");
	// var wordCount = 0,
	// 	sentCount = 0,
	// 	paraCount = 0,
	// 	charCount = 0;
	// const handleInput = (e) => {
	// 	setInput(e.target.value);
	// };

	// if (input.length > 0) {
	// 	charCount = input.length;
	// 	wordCount = input.split(" ")?.length;
	// 	sentCount = input.split(".")?.length - 1;
	// 	input.match(/\n/g) ? (paraCount = input.match(/\n/g).length) : 0;
	// }

	// var values = [wordCount, charCount, sentCount, paraCount];
	// const handleChange = (e) => {
	// 	setInput(e.target.value);
	// };

	// const handle2 = (e) => {
	// 	setInput2(e.target.value);
	// };
	//const prom = new Promise()
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("useEffect Called");
		setCount(1);
	}, [props.visible]);
	return (
		<div>
			{count}
			{/* <form className="formgroup">
				<input
					type="text"
					value={input}
					onChange={handleChange}
					className=" m-4 p-4 border bg-black-100 shadow-lg items-center"
				/>
				<input
					type="text"
					value={input2}
					onChange={handle2}
					className=" m-4 p-4 border bg-black-100 shadow-lg items-center"
				/>
			</form> */}
		</div>
	);
	// 	<div className="m-4 p-4 items-center">
	// 		<div className="border bg-black-100 shadow-lg m-4 p-4 text-lg text-indigo-500">
	// 			<div className="flex m-2 p-2 justify-between items-center">
	// 				{titles.map((item, i) => {
	// 					return (
	// 						<ul key={i}>
	// 							<li className="text-indigo-500">{item}</li>
	// 						</ul>
	// 					);
	// 				})}
	// 			</div>
	// 			<div className="flex m-2 p-2 justify-between items-center">
	// 				{values.map((item, i) => {
	// 					return (
	// 						<ul key={i} className="flex">
	// 							<li>{item}</li>
	// 						</ul>
	// 					);
	// 				})}
	// 			</div>
	// 		</div>
	// 		<div className="flex m-4 p-4 items-center justify-center">
	// 			<textarea
	// 				rows={30}
	// 				cols={200}
	// 				className="border bg-black-100 shadow-lg items-center"
	// 				value={input}
	// 				onChange={handleInput}
	// 			/>
	// 		</div>
	// 	</div>
	// );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
