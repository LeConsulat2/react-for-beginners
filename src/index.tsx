import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
