import { RootState } from "../reducers/root.reducer";
import { createSelector } from "@reduxjs/toolkit";
import { ILibraryState } from "../reducers/library.reducer";

const libraryStateSelector = createSelector(
	(state: RootState) => state.library,
	(library: ILibraryState) => library,
);

export const gamesSelector = createSelector(
	libraryStateSelector,
	(library: ILibraryState) => library.games,
);
