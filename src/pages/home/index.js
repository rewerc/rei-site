import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Colors, Fonts } from "../../constants";

const theme = createTheme({
	typography: { fontFamily: Fonts.Moul }
});

const HomePage = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className={`w-full h-screen flex flex-col px-28 bg-[#401F71] pt-16 select-none`}>
				<div className="w-full flex justify-between">
					<div className="flex align-center">
						<Typography>REINALD C.</Typography>
					</div>
					<div className="">

					</div>
				</div>
				<div className={`p-12 rounded-[2.5rem] bg-[${Colors.Cream}]`}>
					<Typography variant="h3">Welcome</Typography>
					<Typography variant="h3">to</Typography>
					<Typography variant="h3">Reinald.Site</Typography>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default HomePage;