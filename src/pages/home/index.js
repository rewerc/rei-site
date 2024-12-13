import { useState, useEffect } from 'react';

import { Box, Button, createTheme, Paper, Tab, Tabs, ThemeProvider, Typography } from '@mui/material';
import { Book as BookIcon, Notifications as NotificationsIcon } from '@mui/icons-material';

import TabPanel from './component/TabPanel';
import { FrontPageTheme } from '../../themes';
import { Colors } from '../../constants';
import { LogoBlack, LogoTranstyled } from '../../components/icons';

const TabChoices = {
  Blogs: 'Blogs',
  Notifications: 'Notifications',
}

const theme = createTheme(FrontPageTheme);

const HomePage = () => {
  const [value, setValue] = useState(TabChoices.Blogs);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    document.title = 'Home - Reinald.site'
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full h-full py-10 px-44">
        <div className="flex items-center mb-10">
          <LogoBlack width={30} />
          <Typography 
            variant="h5" 
            className="drop-shadow-2xl hidden xl:block pl-8" 
            sx={{ color: Colors.Black(80), fontWeight: 'bold' }}
          >
            Reinald.site
          </Typography>
        </div>

        <Paper>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab icon={<BookIcon />} value={TabChoices.Blogs} sx={{ width: '10rem', fontWeight: (value === TabChoices.Blogs ? 'bold' : 'normal'), fontSize: '1rem' }} />
              <Tab icon={<NotificationsIcon />} value={TabChoices.Notifications} sx={{ width: '10rem', fontWeight: (value === TabChoices.Notifications ? 'bold' : 'normal'), fontSize: '1rem' }} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={TabChoices.Blogs}>
            {TabChoices.Blogs}
          </TabPanel>

          <TabPanel value={value} index={TabChoices.Notifications}>
            {TabChoices.Notifications}
          </TabPanel>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;