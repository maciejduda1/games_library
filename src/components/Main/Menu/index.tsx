import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../../store/reducers/auth.reducer";

interface IMenuProps {}
const Menu: React.FC<IMenuProps> = () => {
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(setToken(null));
	};
	return (
		<Stack spacing={2} borderRight={2} height={"100vh"} pl={2} pt={2}>
			<Typography variant="h6">Menu</Typography>
			<NavLink to={"/"}>Item 1</NavLink>
			<NavLink to={"/"}>Item 2</NavLink>
			<NavLink to={"/"}>Item 3</NavLink>
			<NavLink to={"/"}>Item 4</NavLink>
			<Link>
				<Typography onClick={logout} variant="subtitle1">
					Logout
				</Typography>
			</Link>
		</Stack>
	);
};

export default Menu;
