import { Box, Fab, Switch, Typography } from "@mui/material";
import { ThemeType } from "../../../../types/theme";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "../../../../store/selectors/auth.selectors";
import { setTheme } from "../../../../store/reducers/auth.reducer";

const ThemeSwitch = () => {
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
		<Fab color="primary" onClick={handleThemeChange}>
			{theme === ThemeType.LIGHT ? "L" : "D"}
		</Fab>
	);
};

export default ThemeSwitch;
