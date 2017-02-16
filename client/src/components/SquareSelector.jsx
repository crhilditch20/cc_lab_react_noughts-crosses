import React from 'react';

class SquareSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event) {
    var newIndex = event.target.value;
    this.setState({ selectedIndex: newIndex});
    this.props.selectSquare(newIndex);
  }

  render() {
    var options = this.props.boardSquares.map( function(square, index) {
      return <option value={index} key={index}>{square}</option>
    })

    return (
      <select id="squares" value = {this.state.selectedIndex} onChange={this.handleChange.bind(this)}>
      {options}
      </select>
      );
  }

}

export default SquareSelector;