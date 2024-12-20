// Global context management
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';
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
