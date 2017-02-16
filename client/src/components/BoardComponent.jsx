import React from'react';

var Board = function (props) {

  return (
      <div id="board-div">
        <table id='board'>
        <tbody>
          <tr>
            <td>{props.boardArray[0].squareValue}</td>
            <td>{props.boardArray[1].squareValue}</td>
            <td>{props.boardArray[2].squareValue}</td>
          </tr>
          <tr>
            <td>{props.boardArray[3].squareValue}</td>
            <td>{props.boardArray[4].squareValue}</td>
            <td>{props.boardArray[5].squareValue}</td>
          </tr>
          <tr>
            <td>{props.boardArray[6].squareValue}</td>
            <td>{props.boardArray[7].squareValue}</td>
            <td>{props.boardArray[8].squareValue}</td>
          </tr>
          </tbody>
        </table>
      </div>


    );
};


export default Board;