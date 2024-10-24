// Global context management
import React from "react";
import Routers from "./routes";
import { BrowserRouter } from "react-router-dom";
import './index.css';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
