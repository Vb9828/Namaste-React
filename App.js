import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";

const Appcomponent = () => {
	return (
		<div id="container">
			<HeaderComponent />
			<BodyComponent />
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcomponent />);
