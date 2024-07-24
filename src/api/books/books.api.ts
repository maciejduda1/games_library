import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GOOGLE_BOOKS_API } from "../base";
import { BookItem, BooksVolumesResponse } from "../../types/searchResult.model";
import { Book } from "../../types/basicModels.model";
import { Collection } from "../../types/collectionElement.model";
import {
	getYearFromDate,
	reduceStringArray,
} from "../../utils/dataManipulation.utils";

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
					q: `"intitle:${name}"`,
					//TODO: add pagination
					// maxResults: 20,
					// startIndex: 0,
					key: process.env.REACT_APP_GOOGLE_API_KEY,
				},
			}),
			transformResponse(
				baseQueryReturnValue: BooksVolumesResponse,
			): Book[] {
				const items = baseQueryReturnValue.items;
				return items.map((item) => {
					const volumeInfo = item?.volumeInfo;

					return {
						id: item.id,
						image: volumeInfo.imageLinks?.thumbnail || "",
						title: volumeInfo.title,
						author: reduceStringArray(volumeInfo.authors),
						description: volumeInfo.description || "",
						year: getYearFromDate(volumeInfo.publishedDate),
						isbn:
							volumeInfo.industryIdentifiers?.[0]?.identifier ||
							"",
						publisher: volumeInfo.publisher || "",
						type: Collection.BOOKS,
					};
				});
			},
		}),
		bookDetails: builder.query({
			query: (id) => ({
				url: `volumes/${id}`,
				params: { key: process.env.REACT_APP_GOOGLE_API_KEY },
			}),
			transformResponse(item: BookItem): Book {
				const volumeInfo = item?.volumeInfo;
				return {
					id: item.id,
					image: volumeInfo.imageLinks?.thumbnail || "",
					title: volumeInfo.title,
					author: reduceStringArray(volumeInfo.authors),
					description: volumeInfo.description || "",
					year: getYearFromDate(volumeInfo.publishedDate),
					isbn: volumeInfo.industryIdentifiers?.[0]?.identifier || "",
					publisher: volumeInfo.publisher || "",
					type: Collection.BOOKS,
				};
			},
		}),
	}),
});
export const { useBookDetailsQuery, useSearchBooksQuery } = booksApi;
export default booksApi;
