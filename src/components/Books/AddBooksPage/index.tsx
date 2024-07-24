import React, { FC } from "react";
import { Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useDebouncedCallback } from "use-debounce";
import { useSearchBooksQuery } from "../../../api/books/books.api";
import BookSearchTable from "../../Shared/BookSearchTable";

interface IAddBooksPageProps {}
const AddBooksPage: FC<IAddBooksPageProps> = () => {
	const [bookTitle, setBookTitle] = React.useState<string>("");

	const { data, isFetching } = useSearchBooksQuery(bookTitle);

	const debouncedOnSearch = useDebouncedCallback(
		(e) => setBookTitle(e.target.value),
		1000,
	);
	console.log(process.env.REACT_APP_GOOGLE_API_KEY);
	return (
		<Stack>
			<Box m={4}>
				<TextField onChange={debouncedOnSearch} />
			</Box>
			<BookSearchTable isLoading={isFetching} rows={data || []} />
		</Stack>
	);
};

export default AddBooksPage;
