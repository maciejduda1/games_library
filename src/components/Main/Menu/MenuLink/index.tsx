import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

interface MenuLinkProps {
	to: string;
}
const MenuLink: React.FC<PropsWithChildren<MenuLinkProps>> = ({
	to,
	children,
}) => {
	return (
		<Box p={2}>
			<NavLink className={"navLink"} to={to}>
				{children}
			</NavLink>
		</Box>
	);
};

export default MenuLink;
