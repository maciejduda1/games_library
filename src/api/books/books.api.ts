import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GOOGLE_BOOKS_API } from "../base";

const booksApi = createApi({
	reducerPath: "booksApi",
	baseQuery: fetchBaseQuery({
		baseUrl: GOOGLE_BOOKS_API,
		jsonContentType: "application/json",
	}),
	endpoints: (builder) => ({
		searchBooks: builder.query({
			query: (name) => ({
				url: "volumes",
				params: {
					q: name + "+intitle",
					key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
				},
			}),
		}),
		bookDetails: builder.query({
			query: (id) => ({
				url: `volumes/${id}`,
				params: { key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY },
			}),
		}),
	}),
});
export const { useBookDetailsQuery, useSearchBooksQuery } = booksApi;
export default booksApi;
