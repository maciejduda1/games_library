import React from "react";
import { Link, Stack, Typography } from "@mui/material";

interface IMenuProps {}
const Menu: React.FC<IMenuProps> = () => {
	return (
		<Stack spacing={2} borderRight={2} height={"100vh"} pl={2} pt={2}>
			<Typography variant="h6">Menu</Typography>
			<Link underline="none" href="#">
				Item 1
			</Link>
			<Link underline="none" href="#">
				Item 2
			</Link>
			<Link underline="none" href="#">
				Item 3
			</Link>
			<Link underline="none" href="#">
				Item 4
			</Link>
		</Stack>
	);
};

export default Menu;
