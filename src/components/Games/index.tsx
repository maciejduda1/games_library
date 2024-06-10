import React from "react";
import { Paper, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const Games: React.FC = () => {
	return (
		<Paper elevation={1}>
			<Stack p={4}>
				<Outlet />
			</Stack>
		</Paper>
	);
};

export default Games;
