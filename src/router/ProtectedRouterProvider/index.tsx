import {
	authenticatedRootRouter,
	unauthenticatedRootRouter,
} from "../root.router";
import { RouterProvider } from "react-router-dom";
import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { tokenSelector } from "../../store/selectors/auth.selectors";

const ProtectedRouterProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const token = useSelector(tokenSelector);

	return (
		<RouterProvider
			router={token ? authenticatedRootRouter : unauthenticatedRootRouter}
		/>
	);
};

export default ProtectedRouterProvider;
