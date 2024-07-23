import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import React from "react";
import { useDispatch } from "react-redux";
import { removeElement } from "../../../../store/reducers/library.reducer";
import { Book, Comic, Game } from "../../../../types/basicModels.model";

interface IActionsCellProps {
	row: Book | Game | Comic;
}
const ActionsCell: React.FC<IActionsCellProps> = ({ row }) => {
	const dispatch = useDispatch();
	const deleteElement = () => {
		dispatch(removeElement(row));
	};

	const editElement = () => {
		console.log("Edit element", row);
	};

	return (
		<Box>
			<IconButton onClick={editElement}>
				<OpenInFullIcon />
			</IconButton>
			<IconButton onClick={deleteElement}>
				<DeleteForeverIcon />
			</IconButton>
		</Box>
	);
};

export default ActionsCell;
