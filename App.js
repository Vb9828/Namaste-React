import React from "react";
import ReactDOM from "react-dom/client";
import InputComponent from "./src/components/InputBox/InputComponent";
import BasicList from "./src/components/BasicList/BasicList";
import Todos1 from "./src/components/Todos1.js/Todos1";
import Todos2 from "./src/components/Todos2/Todos2";
import Timer from "./src/components/Timer/Timer";
const Appcomponent = () => {
	return (
		<div id="container">
			{/* <InputComponent /> */}
			{/* <BasicList /> */}
			{/* <Todos2 /> */}
			<Timer />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcomponent />);
