import React from "react";
import { Paper, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const Books: React.FC = () => {
	return (
		<Paper elevation={1}>
			<Stack p={4}>
				<Outlet />
			</Stack>
		</Paper>
	);
};

export default Books;
