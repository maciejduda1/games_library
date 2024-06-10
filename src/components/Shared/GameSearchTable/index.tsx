import React from "react";
import {
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { translate } from "../../../i18n";
import { styled } from "@mui/material/styles";
import { GameSearchResultModel } from "../../../types/searchResult.model";
import IconButton from "@mui/material/IconButton";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));
interface ITableBaseProps {
	rows: GameSearchResultModel[];
	isLoading?: boolean;
}
const GameSearchTable = ({ rows, isLoading }: ITableBaseProps) => {
	const navigate = useNavigate();
	const viewElement = (id: string) => {
		navigate(`/games/details/${id}`);
	};

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>
							{translate("table.number")}
						</StyledTableCell>
						<StyledTableCell align="right">
							{translate("table.title")}
						</StyledTableCell>
						<StyledTableCell align="right">
							{translate("table.actions")}
						</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{!isLoading &&
						rows.map((row, index) => (
							<StyledTableRow key={index}>
								<StyledTableCell component="th" scope="row">
									{index + 1}
								</StyledTableCell>
								<StyledTableCell align="right">
									{row.title}
								</StyledTableCell>
								<StyledTableCell align="right">
									<IconButton
										onClick={() => viewElement(row.id)}
									>
										<AddToPhotosIcon />
									</IconButton>
								</StyledTableCell>
							</StyledTableRow>
						))}
					{isLoading && (
						<StyledTableRow>
							<StyledTableCell
								colSpan={3}
								component="th"
								scope="row"
							>
								<CircularProgress color="secondary" />
							</StyledTableCell>
						</StyledTableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default GameSearchTable;
