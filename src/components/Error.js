import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();
	return (
		<div>
			<h1>Oops!</h1>
			<h2>Something went wrong</h2>
			<h2>{console.log(err)}</h2>
			<h2></h2>
			<h2></h2>
		</div>
	);
};

export default Error;
