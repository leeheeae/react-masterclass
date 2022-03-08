import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  textColor: '#fff',
  backgroundColor: '#111',
};

const ligntTheme = {
  textColor: '#111',
  backgroundColor: '#fff',
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
