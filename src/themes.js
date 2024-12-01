import { Colors, Fonts } from "./constants";

export const FrontPageTheme = {
  typography: { 
    fontFamily: Fonts.Raleway,
    button: { fontFamily: Fonts.Raleway }
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            color: Colors.Gray(40)
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' }
      },
    },
  },
};