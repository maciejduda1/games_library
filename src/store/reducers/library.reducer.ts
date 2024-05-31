import { createSlice } from "@reduxjs/toolkit";

//todo: Define the initial state, types etc.
const initialState: { games: { id: string }[] } = {
	games: [],
};

const librarySlice = createSlice({
	name: "library",
	initialState,
	reducers: {
		addBook(state, action) {
			state.games.push(action.payload);
		},
		removeBook(state, action) {
			state.games = state.games.filter(
				(book) => book.id !== action.payload,
			);
		},
	},
});

export const { addBook, removeBook } = librarySlice.actions;
export default librarySlice.reducer;
