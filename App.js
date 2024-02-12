import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import RestroMenu from "./src/components/RestroMenu";
import UserContext from "./src/utils/UserContext";

const Grocery = lazy(() => import("./src/components/Grocery"));
const Appcomponent = () => {
	const [userInfo, setUserInfo] = useState();

	useEffect(() => {
		//Making an api call to fetch the user info

		const data = {
			name: "Vinay Bhaskar",
		};
		setUserInfo(data.name);
	}, []);
	return (
		<UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
			<div id="container">
				<HeaderComponent />
				<Outlet />
			</div>
		</UserContext.Provider>
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
				path: "/restaurants",
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
