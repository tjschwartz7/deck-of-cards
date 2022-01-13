
import './App.css';
import React from 'react';

function App(){
    return(
      <div className="container">

      <div className="header">
        <div className="header__draw"></div>
        <div className="header__discord"></div>
      </div>
        <div class="footer">
        <Table

        />
      </div>
    </div>
    );
}

export default App;


function Card(props){

  return(
    <div className={props.class_name}></div>

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
  }
  renderCard(data, i) {
    return (
      <Card
      class_name= {"footer__cards--one"}
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
