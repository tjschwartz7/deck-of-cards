import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
<Screen/>
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



function Card(props){

  return(
    <div className={props.class_name} backgroundImage={props.image}><p>{props.class_name}</p></div>

  )
}

class Table extends React.Component {

  renderCard(data, i) {
    return (
      <Card
      value = {data}
      class_name= {"footer__cards--" + data}
      image={this.props.cards[i]}
      //onClick={() => this.props.onClick(data)}
      />
    );
  }


  render() {
    return (
      <div class="footer__cards">
          {this.renderCard("one", 0)}
          {this.renderCard("two", 1)}
          {this.renderCard("three", 2)}
          {this.renderCard("four", 3)}
          {this.renderCard("five", 4)}
          </div>

    );
  }
}


class Screen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //ANY AND ALL INITIALIZATIONS OF DATA GO HERE
      cards: Array(5).fill(null)
    };

  }
  handleClick(i){
    //Do something if cards[i] is clicked
  }
render(){
  return(
    <footer class="footer">

    <App/>
    <Table/>
  </footer>
  );
}



}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
