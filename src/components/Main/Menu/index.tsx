import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setToken } from "../../../store/reducers/auth.reducer";
import ThemeSwitch from "./ThemeSwitch";
import linkList from "./linkList";
import { translate } from "../../../i18n";
import MenuLink from "./MenuLink";

interface IMenuProps {}
const Menu: React.FC<IMenuProps> = () => {
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(setToken(null));
	};
	return (
		<Stack spacing={2} borderRight={2} height={"100vh"}>
			<Stack flexGrow={1} spacing={2}>
				{linkList.map((link) => (
					<MenuLink to={link.path}>
						{translate(`menuLink.${link.title}`)}
					</MenuLink>
				))}
			</Stack>
			<Link>
				<Typography mb={4} onClick={logout} variant="subtitle1">
					Logout
				</Typography>
			</Link>
			<ThemeSwitch />
		</Stack>
	);
};

export default Menu;
