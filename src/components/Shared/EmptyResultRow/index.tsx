import { translate } from "../../../i18n";
import React from "react";
import { TableCell, tableCellClasses, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const EmptyResultRow = () => {
	return (
		<TableRow>
			<StyledTableCell
				sx={{ textAlign: "center" }}
				colSpan={10}
				align="right"
			>
				{translate("table.noResults")}
			</StyledTableCell>
		</TableRow>
	);
};

export default EmptyResultRow;
