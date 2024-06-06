import { combineReducers } from "@reduxjs/toolkit";
import libraryReducer from "./library.reducer";
import authReducer from "./auth.reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
	library: libraryReducer,
	auth: authReducer,
});

export default rootReducer;
