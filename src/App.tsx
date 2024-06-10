import React from "react";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import ProtectedRouterProvider from "./router/ProtectedRouterProvider";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ProtectedRouterProvider />
			</PersistGate>
		</Provider>
	);
}

export default App;
