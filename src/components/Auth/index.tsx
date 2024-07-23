import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Paper, Typography } from "@mui/material";
import Auth_background from "../../assets/images/auth_background.png";
import { translate } from "../../i18n";

const Auth: React.FC = () => {
	return (
		<Container
			style={{
				minWidth: "100vw",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				backgroundImage: `url(${Auth_background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Paper elevation={1}>
				<Typography
					mx={2}
					color={"primary"}
					mt={2}
					textAlign={"center"}
					variant={"h2"}
				>
					{translate("auth.title")}
				</Typography>
				<Typography
					color={"secondary"}
					textAlign={"center"}
					variant={"subtitle1"}
					mx={2}
				>
					{translate("auth.subtitle")}
				</Typography>
				<Box
					display="flex"
					flexGrow="1"
					justifyContent="center"
					alignItems="center"
				>
					<Outlet />
				</Box>
			</Paper>
		</Container>
	);
};
export default Auth;
