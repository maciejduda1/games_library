import React from "react";
import { Container, Grid } from "@mui/material";
import Menu from "./Menu";

interface IMainProps {}
const Main: React.FC<IMainProps> = () => {
	return (
		<Container
			style={{
				minWidth: "100%",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				// background:
				// 	"linear-gradient(0deg, rgba(121,9,9,1) 0%, rgba(38,7,7,1) 35%, rgba(0,0,0,1) 100%)",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={1}>
					<Menu />
				</Grid>
				<Grid item xs={11}>
					TU BĘDZIE ROUTER
				</Grid>
			</Grid>
		</Container>
	);
};

export default Main;
