import React from "react";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import lightTheme from "./themes/light.theme";

import { Provider } from "react-redux";
import ProtectedRouterProvider from "./router/ProtectedRouterProvider";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<ProtectedRouterProvider />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
