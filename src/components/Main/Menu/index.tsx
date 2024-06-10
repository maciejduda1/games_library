import React from "react";
import linkList from "./linkList";
import List from "@mui/material/List";
import MenuLink from "./MenuLink";
import ThemeSwitch from "./ThemeSwitch";
import Logout from "./Logout";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";

interface IMenuProps {
	open: boolean;
}
const Menu: React.FC<IMenuProps> = ({ open }) => {
	return (
		<Stack height={"100vh"}>
			<List>
				{linkList.map((link) => (
					<MenuLink key={link.id} link={link} open={open}>
						{link.icon}
					</MenuLink>
				))}
			</List>
			<List style={{ marginTop: "auto" }}>
				<Divider />
				<ThemeSwitch open={open} />
				<Logout open={open} />
			</List>
		</Stack>
	);
};

export default Menu;
