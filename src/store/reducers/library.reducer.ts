import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, Comic, Game } from "../../types/basicModels.model";

export interface ILibraryState {
	games: Game[];
	books: Book[];
	comics: Comic[];
}

//todo: remove mock data
const initialState: ILibraryState = {
	games: [],
	books: [],
	comics: [],
};

const librarySlice = createSlice({
	name: "library",
	initialState,
	reducers: {
		addElement(state, action: PayloadAction<Game | Book | Comic>) {
			const elementType = action.payload.type;
			return {
				...state,
				[elementType]: [...state[elementType], action.payload],
			};
		},
		removeElement(state, action: PayloadAction<Game | Book | Comic>) {
			const elementType = action.payload.type;
			const newElements = state[elementType].filter(
				(el) => el.id !== action.payload.id,
			);
			return {
				...state,
				[elementType]: [...newElements],
			};
		},
	},
});

export const { addElement, removeElement } = librarySlice.actions;
export default librarySlice.reducer;
