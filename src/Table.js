import React from 'react';
import './App.css';

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

export default Table;
