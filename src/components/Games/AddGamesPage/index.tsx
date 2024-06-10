import React, { useMemo } from "react";
import { Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useSearchGamesQuery } from "../../../api/games/games.api";
import GameSearchTable from "../../Shared/GameSearchTable";
import { GameSearchResultModel } from "../../../types/searchResult.model";
import { useDebouncedCallback } from "use-debounce";

interface IAddGamesModalProps {}
const AddGamesPage: React.FC<IAddGamesModalProps> = () => {
	const [gameName, setGameName] = React.useState<string>("");

	const { data, isFetching } = useSearchGamesQuery(gameName);

	const debouncedOnSearch = useDebouncedCallback(
		(e) => setGameName(e.target.value),
		1000,
	);

	const tableData: GameSearchResultModel[] = useMemo(() => {
		if (data) {
			const xmlDoc = new DOMParser().parseFromString(
				data as string,
				"text/xml",
			);
			const items = xmlDoc.getElementsByTagName("item");
			const result: GameSearchResultModel[] = [];
			for (let i = 0; i < items.length; i++) {
				const item = items[i];
				const title = item
					.getElementsByTagName("name")[0]
					.getAttribute("value");
				const id = item.getAttribute("id");
				const newElement: GameSearchResultModel = {
					title: title || "",
					id: id || (Math.random() * 1000).toString(),
				};

				result.push(newElement);
			}
			return result;
		}
		return [];
	}, [data]);

	return (
		<Stack>
			<Box m={4}>
				<TextField onChange={debouncedOnSearch} />
			</Box>
			<GameSearchTable isLoading={isFetching} rows={tableData || []} />
		</Stack>
	);
};

export default AddGamesPage;
