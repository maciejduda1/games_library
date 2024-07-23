import {
	authenticatedRootRouter,
	unauthenticatedRootRouter,
} from "../root.router";
import { RouterProvider } from "react-router-dom";
import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import {
	themeSelector,
	tokenSelector,
} from "../../store/selectors/auth.selectors";
import { ThemeType } from "../../types/theme";
import lightTheme from "../../themes/light.theme";
import darkTheme from "../../themes/dark.theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const ProtectedRouterProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const token = useSelector(tokenSelector);
	const theme = useSelector(themeSelector);

	return (
		<ThemeProvider
			theme={theme === ThemeType.LIGHT ? lightTheme : darkTheme}
		>
			<CssBaseline />
			<RouterProvider
				router={
					token ? authenticatedRootRouter : unauthenticatedRootRouter
				}
			/>
		</ThemeProvider>
	);
};

export default ProtectedRouterProvider;
