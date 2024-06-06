import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../reducers/root.reducer";

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
