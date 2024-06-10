import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CasinoIcon from "@mui/icons-material/Casino";

export interface Link {
	id: number;
	title: string;
	path: string;
	icon?: React.ReactNode;
}

const linkList: Link[] = [
	{
		id: 0,
		title: "dashboard",
		path: "/",
		icon: <DashboardIcon />,
	},
	{
		id: 1,
		title: "games",
		path: "games",
		icon: <CasinoIcon />,
	},
	{
		id: 2,
		title: "books",
		path: "/books",
		icon: <LocalLibraryIcon />,
	},
	{
		id: 3,
		title: "comics",
		path: "/comics",
		icon: <ImportContactsIcon />,
	},
	{
		id: 4,
		title: "account",
		path: "/account",
		icon: <PermIdentityIcon />,
	},
];
export default linkList;
