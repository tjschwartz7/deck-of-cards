import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from './Table';
import Screen from './Screen';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

  </React.StrictMode>,
  document.getElementById('root')
);


//function API(){
  //const API_KEY = 'https://api.nasa.gov/planetary/apod?api_key=exXD91W9CP7AvXGNTI0ilBji1HwQ75hbhw8AzFLY';

  //const [cards, setCards] = useState();

  //const getApiData = async () => {
  //  const response = await fetch(API_KEY).then(
      //(response) => response.JSON()
  //  );

    //setCards(response);
  //}
//}








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
