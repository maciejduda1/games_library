import { useNavigate, useParams } from "react-router-dom";
import { useGameDetailsQuery } from "../../../api/games/games.api";
import React, { useMemo } from "react";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
} from "@mui/material";
import { Game } from "../../../types/basicModels.model";
import { Collection } from "../../../types/collectionElement.model";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { translate } from "../../../i18n";
import { useDispatch } from "react-redux";
import { addElement } from "../../../store/reducers/library.reducer";
import { decodeHtml } from "../../../utils/dataManipulation.utils";

interface IGameDetailsPageProps {}
const GameDetailsPage: React.FC<IGameDetailsPageProps> = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams<{ id: string }>();
	const { data, isLoading } = useGameDetailsQuery(id);

	const gameData: Game | null = useMemo(() => {
		if (data) {
			const xmlDoc = new DOMParser().parseFromString(
				data as string,
				"text/xml",
			);
			const items = xmlDoc.getElementsByTagName("item");
			const result: Game[] = [];
			for (let i = 0; i < items.length; i++) {
				const item = items[i];

				const title =
					item
						.getElementsByTagName("name")[0]
						.getAttribute("value") || "";

				const image =
					item.getElementsByTagName("image")[0].textContent || "";
				const description =
					decodeHtml(
						item.getElementsByTagName("description")[0].textContent,
					) || "";

				const yearpublished = item
					.getElementsByTagName("yearpublished")[0]
					.getAttribute("value");

				const year = yearpublished ? parseInt(yearpublished) : 0;

				const links = item.getElementsByTagName("link");

				const linksArr: HTMLLinkElement[] = [].slice.call(links);

				const author =
					linksArr
						.find((link) => {
							return (
								link.getAttribute("type") ===
								"boardgamedesigner"
							);
						})
						?.getAttribute("value") || "";

				result.push({
					id: id || "",
					title,
					image,
					author,
					year,
					description,
					type: Collection.GAMES,
				});
			}
			if (result.length > 0) {
				return result[0];
			}

			return null;
		}
		return null;
	}, [data]);

	if (isLoading) {
		return <CircularProgress color="secondary" />;
	}

	const addGameToCollection = () => {
		//TODO backend call
		if (gameData) {
			dispatch(addElement(gameData));
			navigate(-2);
		}
	};

	return (
		<Card elevation={0}>
			<CardMedia
				sx={{ height: 240, backgroundSize: "contain", width: "auto" }}
				image={gameData?.image}
				title="green iguana"
			/>
			<CardContent>
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"flex-end"}
				>
					<Typography variant="h4" component="div" mr={2}>
						{gameData?.title}
					</Typography>
					<Typography
						color={"text.secondary"}
						lineHeight={2}
						component="div"
						variant={"subtitle1"}
					>
						{gameData?.year}
					</Typography>
				</Box>
				<Typography
					textAlign={"center"}
					gutterBottom
					variant={"subtitle2"}
				>
					{translate("game.author")}
					{gameData?.author}
				</Typography>
				<Typography variant="body2" color="text.primary">
					{gameData?.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					color={"warning"}
					onClick={() => navigate(-1)}
					variant={"outlined"}
				>
					{translate("button.cancel")}
				</Button>
				<Button
					color={"success"}
					onClick={addGameToCollection}
					variant={"contained"}
				>
					{translate("button.add")}
				</Button>
			</CardActions>
		</Card>
	);
};

export default GameDetailsPage;
