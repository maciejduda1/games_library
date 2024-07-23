import { combineReducers } from "@reduxjs/toolkit";
import libraryReducer from "./library.reducer";
import authReducer from "./auth.reducer";
import gamesApi from "../../api/games/games.api";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
	library: libraryReducer,
	auth: authReducer,
	[gamesApi.reducerPath]: gamesApi.reducer,
});

export default rootReducer;
