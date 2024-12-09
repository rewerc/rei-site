import React, { useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import NavItem from './components/NavItem';
import NameTitle from './components/NameTitle';
import BackgroundTop from './components/BackgroundTop';
import { Colors } from '../../constants';
import { randomPick } from '../../utils';
import { LogoWhite } from '../../components/icons';
import { FrontPageTheme } from '../../themes';
import ProceedButton from './components/ProceedButton';

const theme = createTheme(FrontPageTheme);

const HomePage = () => {
  useEffect(() => {
    document.title = randomPick([
      'Reinald.site | Welcome to my official site!',
      'Reinald.site | Feel free to look around'
    ]);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="relative w-full h-screen">
        <BackgroundTop />
        <div className={`absolute w-full h-full flex flex-col px-8 pt-8 select-none overflow-clip`}>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center justify-center gap-6">
              <Button 
                sx={{
                  padding: '20px 40px', 
                  borderRadius: 100, 
                  display: 'flex', 
                  gap: 2, 
                  minWidth: 110 
                }}
              >
                <LogoWhite width={30} />
                <Typography variant="h5" className="drop-shadow-2xl hidden lg:block" sx={{ color: Colors.White(), fontWeight: 'bold' }}>
                  Reinald.site
                </Typography>
              </Button>
            </div>
            <div className="flex align-center justify-center gap-14">
              <div className="flex justify-end align-center gap-14">
                <NavItem text="LinkedIn" icon={faLinkedin} url="" />
                <NavItem text="GitHub" icon={faGithub} url="" />
                <NavItem text="Instagram" icon={faInstagram} url="" />
              </div>
              <ProceedButton />
            </div>
          </div>

          <div className="relative h-3/4 flex mt-8 gap-2">
            <div className="w-1/2 pl-24 flex flex-col justify-center h-full rounded-3xl overflow-hidden" >
              <Typography variant="h3" sx={{ color: Colors.White(80) }}>
                Welcome to
              </Typography>
              <NameTitle />
            </div>
            
            <div 
              className="relative w-1/2 pl-16 flex flex-col justify-center align-center h-full rounded-3xl backdrop-blur-lg" 
            >
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
