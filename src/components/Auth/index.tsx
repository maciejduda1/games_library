import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

const Auth: React.FC = () => {
	return (
		<Container
			style={{
				border: "solid",
				minWidth: "100%",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				background:
					"linear-gradient(0deg, rgba(121,9,9,1) 0%, rgba(38,7,7,1) 35%, rgba(0,0,0,1) 100%)",
			}}
		>
			<Typography
				color={"white"}
				mt={8}
				textAlign={"center"}
				variant={"h2"}
			>
				Moja Biblioteka Gier
			</Typography>
			<Box
				display="flex"
				flexGrow="1"
				justifyContent="center"
				alignItems="center"
			>
				<Outlet />
			</Box>
		</Container>
	);
};
export default Auth;
