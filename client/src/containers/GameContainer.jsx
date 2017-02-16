import React from'react';
import Board from '../components/BoardComponent.jsx'
import SquareSelector from '../components/SquareSelector.jsx'

class GameContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      board: [],
      boardSquares: [
        "top-left",
        "top-center",
        "top-right",
        "middle-left",
        "middle-center",
        "middle-right",
        "bottom-left",
        "bottom-center",
        "bottom-right"
      ],
      selectedSquare: null
    }
  }

  populateBoard () {
    var square = {
      squareValue: "."
    };
    var fullBoard = []
    for (var i = 0; i < 9; i++){
      fullBoard.push(Object.create(square));
    }
    return fullBoard;
  }

  selectSquare(index) {
    this.setState({ selectedSquare: index});
  }

  changeSquare(event){
    var newBoard = [...this.state.board];
    var index = this.state.selectedSquare;
    var chosenSquare = newBoard[index];
 
    var newValue = event.target.value;
    chosenSquare.squareValue = newValue;

    console.log(newBoard);
   
    this.setState({board: newBoard});
  }

  win(){
    console.log("function activated");
    var squares = this.state.board;
  
    if (squares[0].squareValue == squares[1].squareValue
      && squares[1].squareValue == squares[2].squareValue) { 
        if (squares[0].squareValue !== ".") {
          return "winner!"
        }
      }

    if (squares[3].squareValue == squares[4].squareValue
      && squares[4].squareValue == squares[5].squareValue) {
        if (squares[3].squareValue !== ".") {
          return "winner!"
        }
      }
    if (squares[6].squareValue == squares[7].squareValue 
      && squares[7].squareValue == squares[8].squareValue) { 
      if (squares[6].squareValue !== ".") {
        return "winner!"
      }
  }
    if (squares[0].squareValue == squares[3].squareValue 
      && squares[3].squareValue == squares[6].squareValue) { 
      if (squares[0].squareValue !== ".") {
        return "winner!"
      }
  }
    if (squares[1].squareValue == squares[4].squareValue 
      && squares[4].squareValue == squares[7].squareValue) { 
      if (squares[1].squareValue !== ".") {
        return "winner!"
      }
  }
    if (squares[2].squareValue == squares[5].squareValue && 
      squares[5].squareValue == squares[8].squareValue) { 
      if (squares[2].squareValue !== ".") {
        return "winner!"
      }
  }
    if (squares[0].squareValue == squares[4].squareValue && 
      squares[4].squareValue == squares[8].squareValue) { 
      if (squares[0].squareValue !== ".") {
        return "winner!"
      }
  }
    if (squares[6].squareValue == squares[4].squareValue && 
      squares[4].squareValue == squares[2].squareValue) { 
      if (squares[6].squareValue !== ".") {
        return "winner!"
      }
  }  
      else {
    return "";
      }
  }

  componentWillMount () {
    this.setState({board: this.populateBoard()});
  }

  render () {
    return (
      <div>
    <h1>Noughts and Crosses</h1>
    <Board boardArray={this.state.board}> </Board>
    <SquareSelector boardSquares={this.state.boardSquares} selectSquare={this.selectSquare.bind(this)}> </SquareSelector>
    <button id='x-button' value='X' onClick={this.changeSquare.bind(this)}>X</button>
    <button id='o-button' value='O' onClick={this.changeSquare.bind(this)}>O</button>
    <h3>{this.win()}</h3>
    </div>
    )
  }

}

export default GameContainer;