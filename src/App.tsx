import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import darkTheme from "./themes/dark.theme";
import lightTheme from "./themes/light.theme";
import Main from "./components/Main";

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<Main />
		</ThemeProvider>
	);
}

export default App;
