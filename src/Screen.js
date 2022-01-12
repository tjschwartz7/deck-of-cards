import Table from './Table';
import App from './App';
import React from 'react';
import './App.css';

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

export default Screen;
