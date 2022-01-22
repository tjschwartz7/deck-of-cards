
import './App.css';
import React from 'react';
import axios from 'axios';

function App(){

  const API_KEY = 'https://api.nasa.gov/planetary/apod?count=20&api_key=exXD91W9CP7AvXGNTI0ilBji1HwQ75hbhw8AzFLY';
  const[image, setImage] = React.useState(null);
  var arr = [0, 1, 2, 3, 4];
  const[vArr, setvArr] = React.useState(arr);
  var arr = [0, 1, 2, 3, 4];
  var largest = arr[4];

React.useEffect(() => {
  axios.get(API_KEY).then((response) => {
    setImage(response.data);
  });
}, []);

    return(
      <div className="container">

      <div className="header">
        <div className="header__draw" onClick ={() => setvArr(arr.map(x => ((image[x] == null) ? ++largest : x)))}><h1>Draw Cards</h1></div>

      </div>
        <div className="footer">
        {console.log(image)}
        {console.log(arr)}
        <Table
        imageArr = {image}
        arr = {vArr}
        />
      </div>
    </div>
    );
}

export default App;


function Card(props){
  return(
    <img className={props.class_name} src={(props.image==null) ? "" : props.image.url} onClick={props.onClick}></img>

  )
}

class Table extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      //ANY AND ALL INITIALIZATIONS OF DATA GO HERE
      cards: this.props.imageArr,
      arr: this.props.arr
    };
  }


  handleClick(i){
    //Do something if cards[i] is clicked
    {this.props.imageArr[i] = null}

    this.setState({      cards:this.props.imageArr     });

  }


  componentDidUpdate(prevProp, prevState) {
     if (prevState.cards !== this.props.imageArr) {
        // Write logic here.
        this.setState({      cards:this.props.imageArr     });
     }
     if(prevState.arr !== this.props.arr){
       console.log(this.props.arr);
       console.log(5);
       this.setState({      arr:this.props.arr     });
     }
  }


  renderCard(data, i) {
    return (
      <Card
      class_name= {"footer__cards--"+data}
      image={this.state.cards == null ? null : this.state.cards[i]}
      onClick={() => this.handleClick(i)}
      />
    );
  }


  render() {
    return (
      <div className="footer__cards">
      {this.renderCard("one", this.state.arr[0])}
      {this.renderCard("two", this.state.arr[1])}
      {this.renderCard("three", this.state.arr[2])}
      {this.renderCard("four", this.state.arr[3])}
      {this.renderCard("five", this.state.arr[4])}
          </div>

    );
  }

}
