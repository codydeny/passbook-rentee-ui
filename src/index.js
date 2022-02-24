import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';
import { GLOBAL_URL } from './utlis/URL';
import axios from 'axios';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import 'animate.css';

// Axios : HTTP Client Global Configuration
axios.defaults.baseURL = GLOBAL_URL;
if(localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('token')}`;
}
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <Router>
        <App />
      </Router>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
