import { createSlice } from "@reduxjs/toolkit";
import { ThemeType } from "../../types/theme";

interface IAuthState {
	user: any;
	token: string | null;
	theme: ThemeType;
}

const initialState: IAuthState = {
	user: null,
	token: null,
	theme: ThemeType.LIGHT,
};

const AuthReducer = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
		setToken(state, action) {
			state.token = action.payload;
		},
		setTheme(state, action) {
			state.theme = action.payload;
		},
	},
});

export const { setUser, setToken, setTheme } = AuthReducer.actions;
export default AuthReducer.reducer;
