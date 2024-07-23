import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { translate } from "../../../../i18n";
import { Link } from "../linkList";

interface MenuLinkProps {
	link: Link;
	open: boolean;
}
const MenuLink: React.FC<PropsWithChildren<MenuLinkProps>> = ({
	link,
	children,
	open,
}) => {
	return (
		<ListItem key={link.id} disablePadding sx={{ display: "block" }}>
			<ListItemButton
				component={NavLink}
				to={link.path}
				sx={{
					minHeight: 48,
					justifyContent: open ? "initial" : "center",
					px: 2.5,
				}}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						mr: open ? 3 : "auto",
						justifyContent: "center",
					}}
				>
					{children}
				</ListItemIcon>
				<ListItemText
					primary={translate(`menuLink.${link.title}`)}
					sx={{
						opacity: open ? 1 : 0,
					}}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default MenuLink;
