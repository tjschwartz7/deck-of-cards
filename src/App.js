
import './App.css';
import React from 'react';
import axios from 'axios';

function App(){

  const API_KEY = 'https://api.nasa.gov/planetary/apod?count=5&api_key=exXD91W9CP7AvXGNTI0ilBji1HwQ75hbhw8AzFLY';
  const[image, setImage] = React.useState(null);
  var count = 0;
  const numbers = [0,1,2,3,4];
console.log(5);

React.useEffect(() => {
  axios.get(API_KEY).then((response) => {
    setImage(response.data);
  });
}, []);
if(image != null)
  console.log(image[0].url);

    return(
      <div className="container">

      <div className="header">
        <div className="header__draw"></div>
        <div className="header__discord"></div>
      </div>
        <div className="footer">
        <Table
        imageArr = {image == null ? null : Array.from([0,1,2,3,4], x=>image[x])}

        //image2 = {(image == null) ? null : image[1].url}
        //image3 = {(image == null) ? null : image[2].url}
        //image4 = {(image == null) ? null : image[3].url}
        //image5 = {(image == null) ? null : image[4].url}
        />
      </div>
    </div>
    );
}

export default App;


function Card(props){
    {console.log(props.image)}
  return(
    <img className={props.class_name} src={(props.image==null) ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.pnghut.com%2F19%2F5%2F1%2FESHtTpwf0x%2Fphotography-stock-royalty-payment-question-mark-symbol.jpg&f=1&nofb=1" : props.image.url} onClick={props.onClick}></img>

  )
}

class Table extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      //ANY AND ALL INITIALIZATIONS OF DATA GO HERE
      cards: Array(5).fill(null),
      bimage:"",
      class_name: ""

    };
  }


  handleClick(i){
    //Do something if cards[i] is clicked
    {this.props.imageArr[i] = null}
    {this.render()}
    {console.log(25)}

  }
  renderCard(data, i) {
        {console.log(this.props.imageArr == null ? null : this.props.imageArr[i])}
        {console.log(24)}
    return (
      <Card
      class_name= {"footer__cards--"+data}
      image={this.props.imageArr == null ? null : this.props.imageArr[i]}
      onClick={() => this.handleClick(i)}
      />
    );
  }


  render() {

    return (
      <div className="footer__cards">
      {this.renderCard("one", 0)}
      {this.renderCard("two", 1)}
      {this.renderCard("three", 2)}
      {this.renderCard("four", 3)}
      {this.renderCard("five", 4)}
          </div>

    );
  }

}
