import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Auth from "../components/Auth";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

export const authenticatedRootRouter = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <div>404 Not Found</div>,
	},
]);

export const unauthenticatedRootRouter = createBrowserRouter([
	{
		path: "/",
		element: <Auth />,
		errorElement: <div>404 Not Found</div>,
		children: [
			{
				path: "/",
				element: <Login />,
				errorElement: <div>404 Not Found</div>,
			},
			{
				path: "register",
				element: <Register />,
				errorElement: <div>404 Not Found</div>,
			},
		],
	},
]);
