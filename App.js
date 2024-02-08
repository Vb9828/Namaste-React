import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import RestroMenu from "./src/components/RestroMenu";

const Grocery = lazy(() => import("./src/components/Grocery"));
const Appcomponent = () => {
	return (
		<div id="container">
			<HeaderComponent />
			<Outlet />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Appcomponent />,
		children: [
			{
				path: "/",
				element: <BodyComponent />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestroMenu />,
			},
		],
		errorElement: <Error />,
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
