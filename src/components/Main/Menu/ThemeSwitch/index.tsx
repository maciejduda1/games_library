import React from "react";
import { ThemeType } from "../../../../types/theme";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "../../../../store/selectors/auth.selectors";
import { setTheme } from "../../../../store/reducers/auth.reducer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListItemText from "@mui/material/ListItemText";
import { translate } from "../../../../i18n";

interface IThemeSwitchProps {
	open: boolean;
}
const ThemeSwitch: React.FC<IThemeSwitchProps> = ({ open }) => {
	const theme = useSelector(themeSelector);
	const dispatch = useDispatch();

	const handleThemeChange = () => {
		dispatch(
			setTheme(
				theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT,
			),
		);
	};

	return (
		<ListItem disablePadding sx={{ display: "block" }}>
			<ListItemButton
				onClick={handleThemeChange}
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
					{theme === ThemeType.LIGHT ? (
						<LightModeIcon />
					) : (
						<DarkModeIcon />
					)}
				</ListItemIcon>
				<ListItemText
					primary={translate(
						`menuLink.${theme === ThemeType.LIGHT ? "lightMode" : "darkMode"}`,
					)}
					sx={{ opacity: open ? 1 : 0 }}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default ThemeSwitch;
