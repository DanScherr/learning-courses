//@ts-check
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
/** Theme */
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme';
import { CssBaseline } from '@mui/material';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
