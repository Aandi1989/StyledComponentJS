import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';

const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:consolas;
}
`

const theme = {
  colors:{
    primary:'red',
    secondary:'green',
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

