import { createSlice } from "@reduxjs/toolkit";

const AuthReducer = createSlice({
	name: "auth",
	initialState: {
		user: null,
		token: null,
	},
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
		setToken(state, action) {
			state.token = action.payload;
		},
	},
});

export const { setUser, setToken } = AuthReducer.actions;
export default AuthReducer.reducer;
