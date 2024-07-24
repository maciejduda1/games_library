import React, { FC } from "react";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { translate } from "../../../i18n";
import { addElement } from "../../../store/reducers/library.reducer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useBookDetailsQuery } from "../../../api/books/books.api";

interface IBookDetailsPageProps {}
const BookDetailsPage: FC<IBookDetailsPageProps> = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams<{ id: string }>();
	const { data, isLoading } = useBookDetailsQuery(id);
	const addBookToCollection = () => {
		//TODO backend call
		if (data) {
			dispatch(addElement(data));
			navigate(-2);
		}
	};
	return (
		<Card elevation={0}>
			<CardMedia
				sx={{ height: 240, backgroundSize: "contain", width: "auto" }}
				image={data?.image}
				title="green iguana"
			/>
			<CardContent>
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"flex-end"}
				>
					<Typography variant="h4" component="div" mr={2}>
						{data?.title}
					</Typography>
					<Typography
						color={"text.secondary"}
						lineHeight={2}
						component="div"
						variant={"subtitle1"}
					>
						{data?.year}
					</Typography>
				</Box>
				<Typography
					textAlign={"center"}
					gutterBottom
					variant={"subtitle2"}
				>
					{translate("game.author")}
					{data?.author}
				</Typography>
				<Typography variant="body2" color="text.primary">
					{data?.description}
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
					onClick={addBookToCollection}
					variant={"contained"}
				>
					{translate("button.add")}
				</Button>
			</CardActions>
		</Card>
	);
};

export default BookDetailsPage;
