import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useState } from "react";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



const API_KEY = 'https://api.nasa.gov/planetary/apod?api_key=exXD91W9CP7AvXGNTI0ilBji1HwQ75hbhw8AzFLY';




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
