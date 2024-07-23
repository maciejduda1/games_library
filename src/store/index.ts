import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/root.reducer";
import gamesApi from "../api/games/games.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import booksApi from "../api/books/books.api";

const persistConfig = {
	key: "app_library",
	storage,
	whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(gamesApi.middleware, booksApi.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export default store;
