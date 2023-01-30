import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { AppProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppProvider>
    <App />
    </AppProvider>
  </Router>
 
);


