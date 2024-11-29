import React, { useEffect } from 'react';
import { IconButton, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Colors, Fonts } from '../../constants';
import { randomPick } from '../../utils';
import { LogoWhite } from '../../components/icons';
import NavItem from './components/NavItem';

const theme = createTheme({
  typography: { fontFamily: Fonts.Raleway },
});

const HomePage = () => {
  useEffect(() => {
    document.title = randomPick([
      'Reinald.site | Welcome to my official site!',
      'Reinald.site | Feel free to look around'
    ]);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div 
        className={`w-full h-screen flex flex-col px-8 md:px-28 pt-8 md:pt-16 select-none overflow-clip`}
        style={{ backgroundColor: Colors.Teal }}
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-center gap-6">
            <IconButton size="large">
              <LogoWhite width={30} />
            </IconButton>
            <Typography variant="h5" sx={{ color: Colors.White, fontWeight: 'bold' }}>
              Reinald.site
            </Typography>
          </div>
          <div className="flex justify-end align-center gap-14">
            <NavItem text="LinkedIn" icon={faLinkedin} url="" />
            <NavItem text="GitHub" icon={faGithub} url="" />
            <NavItem text="Instagram" icon={faInstagram} url="" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
