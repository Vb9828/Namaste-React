import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => (
	<div id="container">
		{Heading}
		<h1> Namaste React functional component</h1>
	</div>
);
const elem = <span>React Span </span>;
const Heading = (
	<h1 className="heading" tabIndex="6">
		{elem}
		Namaste React using JSX
	</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
