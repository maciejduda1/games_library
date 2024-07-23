import React from "react";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { translate } from "../../../i18n";
import ActionsCell from "./ActionsCell";
import { CollectionElementModel } from "../../../types/collectionElement.model";
import EmptyResultRow from "../EmptyResultRow";

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

interface IOwnedTableProps {
	data: CollectionElementModel[];
}
const OwnedTable: React.FC<IOwnedTableProps> = ({ data }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>
							{translate("table.number")}
						</StyledTableCell>
						<StyledTableCell align="right">
							{translate("table.image")}
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
					{data.length > 0 ? (
						data.map((row, index) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component="th" scope="row">
									{index}
								</StyledTableCell>
								<StyledTableCell align="right">
									{row.image}
								</StyledTableCell>
								<StyledTableCell align="right">
									{row.title}
								</StyledTableCell>
								<StyledTableCell align="right">
									<ActionsCell row={row} />
								</StyledTableCell>
							</StyledTableRow>
						))
					) : (
						<EmptyResultRow />
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default OwnedTable;
