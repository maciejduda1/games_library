import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Auth from "../components/Auth";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Games from "../components/Games";
import Books from "../components/Books";
import Comics from "../components/Comics";
import Account from "../components/Account";
import AddGamesPage from "../components/Games/AddGamesPage";
import GamesListPage from "../components/Games/GamesListPage";
import GameDetailsPage from "../components/Games/GameDetailsPage";

export const authenticatedRootRouter = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <div>404 Not Found</div>,
		children: [
			{
				path: "games",
				element: <Games />,
				children: [
					{
						path: "",
						element: <GamesListPage />,
					},
					{
						path: "add",
						element: <AddGamesPage />,
					},
					{
						path: "details/:id",
						element: <GameDetailsPage />,
					},
				],
			},

			{
				path: "books",
				element: <Books />,
				children: [
					{
						path: "",
						element: <Books />,
					},
					{
						path: "add",
						element: <Books />,
					},
					{
						path: "details/:id",
						element: <Books />,
					},
				],
			},
			{
				path: "comics",
				element: <Comics />,
			},
			{
				path: "account",
				element: <Account />,
			},
		],
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
