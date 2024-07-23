import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { translate } from "../../../../i18n";
import ListItem from "@mui/material/ListItem";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { setToken } from "../../../../store/reducers/auth.reducer";

interface ILogoutProps {
	open: boolean;
}
const Logout: React.FC<ILogoutProps> = ({ open }) => {
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(setToken(null));
	};
	return (
		<ListItem disablePadding sx={{ display: "block" }}>
			<ListItemButton
				onClick={logout}
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
					<LogoutIcon />
				</ListItemIcon>
				<ListItemText
					primary={translate("menuLink.logout")}
					sx={{ opacity: open ? 1 : 0 }}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default Logout;
