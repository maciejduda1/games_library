import React from "react";
import { Box, Container, Paper, TextField, Typography } from "@mui/material";

interface ILoginProps {}
const Login: React.FC<ILoginProps> = () => {
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
				<Paper elevation={1}>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						gap={2}
						p={4}
					>
						<Typography textAlign={"center"} variant={"h5"}>
							Login
						</Typography>
						<TextField
							id="outlined-basic"
							label="email"
							variant="outlined"
						/>
						<TextField
							id="outlined-basic"
							label="password"
							variant="outlined"
						/>
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};

export default Login;
