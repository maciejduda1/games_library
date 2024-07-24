import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { booksSelector } from "../../../store/selectors/library.selectors";
import { Button, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { translate } from "../../../i18n";
import OwnedTable from "../../Shared/OwnedTable";

interface IBooksListPageProps {}
const BooksListPage: FC<IBooksListPageProps> = () => {
	const navigation = useNavigate();
	const tableData = useSelector(booksSelector);
	const [filterKey, setFilterKey] = React.useState<string>("");

	const filteredTableData = tableData.filter((game) => {
		return game.title.toLowerCase().includes(filterKey.toLowerCase());
	});

	const navigateToAddGame = () => {
		navigation(`/books/add`);
	};

	return (
		<Stack>
			<Box
				display={"flex"}
				flexDirection={"row"}
				mb={2}
				justifyContent={"flex-end"}
			>
				<TextField
					value={filterKey}
					label={translate("table.search")}
					variant="outlined"
					onChange={(text) => setFilterKey(text.currentTarget.value)}
				/>
				<Button
					sx={{ ml: 2 }}
					variant={"contained"}
					onClick={navigateToAddGame}
				>
					{translate("books.addBook")}
				</Button>
			</Box>
			<OwnedTable data={filteredTableData} />
		</Stack>
	);
};

export default BooksListPage;
