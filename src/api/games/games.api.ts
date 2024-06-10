import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BGG_API } from "../base";

const gamesApi = createApi({
	reducerPath: "gamesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BGG_API,
		jsonContentType: "application/xml; charset=utf-8",
		responseHandler: async (response) => {
			return await response.text();
		},
	}),
	endpoints: (builder) => ({
		searchGames: builder.query({
			query: (name) => ({
				url: "search",
				params: { type: "boardgame", query: name },
			}),
		}),
		gameDetails: builder.query({
			query: (id) => ({
				url: "thing",
				params: { id, type: "boardgame" },
			}),
		}),
	}),
});

export const { useSearchGamesQuery, useGameDetailsQuery } = gamesApi;
export default gamesApi;
