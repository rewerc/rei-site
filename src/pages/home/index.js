import { useState, useEffect } from "react";

import { createTheme, ThemeProvider } from "@mui/material";

import { FrontPageTheme } from "../../themes";
import { Colors } from "../../constants";

const theme = createTheme(FrontPageTheme);

const HomePage = () => {
  useEffect(() => {
    document.title = "Home - Reinald.site";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="w-full h-screen flex flex-col overflow-hidden"
        style={{ background: Colors.Black(90) }}
      >
        <div name="nav" className="w-full h-[10vh]"></div>
        <div
          name="main"
          className="h-[90vh] w-full flex justify-start items-center"
        >
          <div className="w-1/6 h-full"></div>
          <div className="w-5/6 h-full flex justify-center items-center">
            <div
              className="w-[95%] h-[95%] overflow-auto rounded-3xl"
              style={{ background: Colors.White() }}
            ></div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
