import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setToken } from "../../../store/reducers/auth.reducer";
import { NavLink } from "react-router-dom";

interface ILoginProps {}

//TODO: implement login logic
const Login: React.FC<ILoginProps> = () => {
	const dispatch = useDispatch();

	const loginUser = () => {
		dispatch(setToken("token"));
	};

	return (
		<Stack>
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
				<Button
					onClick={loginUser}
					variant="contained"
					color="secondary"
				>
					Login
				</Button>
			</Box>
			<Box
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"center"}
			>
				<Typography variant={"subtitle1"} mr={2}>
					Nie masz konta?
				</Typography>
				<NavLink to={"/register"}>Register</NavLink>
			</Box>
		</Stack>
	);
};

export default Login;
