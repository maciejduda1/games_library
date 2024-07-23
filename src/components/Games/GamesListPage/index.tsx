import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import { translate } from "../../../i18n";
import OwnedTable from "../../Shared/OwnedTable";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { gamesSelector } from "../../../store/selectors/library.selectors";

const GamesListPage = () => {
	const navigation = useNavigate();
	const tableData = useSelector(gamesSelector);
	const [filterKey, setFilterKey] = React.useState<string>("");

	const filteredTableData = tableData.filter((game) => {
		return game.title.toLowerCase().includes(filterKey.toLowerCase());
	});

	const navigateToAddGame = () => {
		navigation(`/games/add`);
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
					Add Game
				</Button>
			</Box>
			<OwnedTable data={filteredTableData} />
		</Stack>
	);
};

export default GamesListPage;
