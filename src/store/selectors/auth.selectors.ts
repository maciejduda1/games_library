import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../reducers/root.reducer";
import { ThemeType } from "../../types/theme";

export const selectAuthState = createSelector(
	(state: RootState) => state.auth,
	(auth) => auth,
);

export const userSelector = createSelector(
	selectAuthState,
	(auth) => auth.user,
);

export const tokenSelector = createSelector(
	selectAuthState,
	(auth) => auth.token,
);

export const themeSelector = createSelector(
	selectAuthState,
	(auth): ThemeType => auth.theme,
);
