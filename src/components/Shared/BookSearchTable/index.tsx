import React, { FC } from "react";
import { styled } from "@mui/material/styles";
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
import IconButton from "@mui/material/IconButton";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { useNavigate } from "react-router-dom";
import { Book } from "../../../types/basicModels.model";

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
interface IBookSearchTableProps {
	rows: Book[];
	isLoading?: boolean;
}
const BookSearchTable: FC<IBookSearchTableProps> = ({ isLoading, rows }) => {
	const navigate = useNavigate();
	const viewElement = (id: string | number) => {
		navigate(`/books/details/${id}`);
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
							{translate("table.author")}
						</StyledTableCell>
						<StyledTableCell align="right">
							{translate("table.year")}
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
									{row.author}
								</StyledTableCell>
								<StyledTableCell align="right">
									{row.year}
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
								colSpan={10}
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
export default BookSearchTable;
