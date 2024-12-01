import { useState } from 'react';
import { createTheme, IconButton, ThemeProvider, styled } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Colors } from "../../../constants";
import { LogoBlack } from '../../../components/icons';

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.Yellow(),
          '&:hover': { backgroundColor: Colors.Yellow() },
          '& .MuiTouchRipple-root': { color: 'transparent'}
        },
      },
    },
  },
});

const ModifiedIButton = styled(IconButton)({
  '&:hover': { transform: 'scale(1.3) rotate(360deg)', transition: 'transform .2s ease-out' },
  '&:active': { transform: 'scale(1) rotate(360deg)', transition: 'transform .1s ease-out' }
});

const ProceedButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <ModifiedIButton
        sx={{ 
          width: 76, 
          height: 76,
          position: 'absolute',
          top: 'calc(50% - 38px)',
          left: 'calc(50% - 38px)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? <LogoBlack width={25} /> : <ArrowForwardIcon fontSize="large" htmlColor={Colors.Black} />}
      </ModifiedIButton>
    </ThemeProvider>
  )
}

export default ProceedButton;