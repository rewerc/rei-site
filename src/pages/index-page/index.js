import React, { useEffect, useState } from 'react';
import { Button, Drawer, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo, faBars } from '@fortawesome/free-solid-svg-icons';

import NavItem from './components/NavItem';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import BackgroundTop from './components/BackgroundTop';
import ProceedButton from './components/ProceedButton';
import { Colors } from '../../constants';
import { randomPick } from '../../utils';
import { LogoWhite } from '../../components/icons';
import { FrontPageTheme } from '../../themes';
import { useIsLg } from '../../hooks/use-breakpoints.';

const theme = createTheme(FrontPageTheme);

const IndexPage = () => {
  const isLg = useIsLg();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    document.title = randomPick([
      'Reinald.site | Welcome to my official site!',
      'Reinald.site | Feel free to look around'
    ]);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="relative w-full h-[200vh] lg:h-screen">
        <BackgroundTop />
        <div className={`absolute w-full h-full flex flex-col lg:px-8 pt-8 select-none overflow-clip`}>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center justify-center gap-6">
              <Button 
                sx={{ padding: '20px 40px',  display: 'flex',  gap: 2,  minWidth: 110 }}
              >
                <LogoWhite width={30} />
                <Typography variant="h5" className="drop-shadow-2xl hidden lg:block pl-8" sx={{ color: Colors.White(), fontWeight: 'bold' }}>
                  Reinald.site
                </Typography>
              </Button>
            </div>
            <div className="flex align-center justify-center gap-5 lg:gap-14 px-5">
              <div className="flex justify-end align-center gap-5 lg:gap-14">
                {
                  isLg ? (
                    <>
                      <NavItem text="LinkedIn" icon={faLinkedin} url="https://id.linkedin.com/in/reinald-chenartha" />
                      <NavItem text="Instagram" icon={faInstagram} url="https://www.instagram.com/justreinald/" />
                      <NavItem text="About" icon={faCircleInfo} url="" />
                    </>
                  ) : (
                    <NavItem icon={faBars} onClick={() => setIsDrawerOpen(true)} /> 
                  )
                }
              </div>
              <ProceedButton />
            </div>
          </div>

          <div className="relative h-full lg:h-3/4 flex flex-col lg:flex-row mt-8 gap-2">
            <LeftPanel />
            <RightPanel />
          </div>
        </div>
      </div>

      <Drawer open={isDrawerOpen && !isLg} onClose={() => setIsDrawerOpen(false)}>
        <div style={{ width: 340 }} className="flex flex-col items-start p-5 gap-5" role="presentation">
          <NavItem color={Colors.Teal()} text="LinkedIn" icon={faLinkedin} url="https://id.linkedin.com/in/reinald-chenartha" />
          <NavItem color={Colors.Teal()} text="Instagram" icon={faInstagram} url="https://www.instagram.com/justreinald/" />
          <NavItem color={Colors.Teal()} text="About" icon={faCircleInfo} url="" />
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

export default IndexPage;
