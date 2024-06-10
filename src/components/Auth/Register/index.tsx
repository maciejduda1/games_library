import React from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface IRegisterProps {}
const Register: React.FC<IRegisterProps> = () => {
	return (
		<Stack px={4}>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				gap={2}
				p={4}
			>
				<Typography textAlign={"center"} variant={"h5"}>
					Register
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
				<TextField
					id="outlined-basic"
					label="repeat password"
					variant="outlined"
				/>
			</Box>
			<Box
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"center"}
			>
				<Typography variant={"subtitle1"} mr={2}>
					Masz już konto?
				</Typography>
				<NavLink to={"/"}>Login</NavLink>
			</Box>
		</Stack>
	);
};

export default Register;
