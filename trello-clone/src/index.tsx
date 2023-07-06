import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppContainer } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );
root.render(
  <React.StrictMode> 
    <AppContainer>
    <App />
    </AppContainer>
  </React.StrictMode>
);



