import React, { Component } from 'react';

import Square from '../components/Square';

class Game extends Component {
  state = {
      numberOfRows: 1,
      numberOfColumns: 1,
  }

  changeRowsAmount = (event) => {
  this.setState({
    numberOfRows: event.target.value
  });
}

  changeColumnsAmount = (event) => {
  this.setState({
    numberOfColumns: event.target.value
  });
}

    render () {
      const columns = [];
        for (let i=1; i<= this.state.numberOfColumns; i++) {
          columns.push(<Square row/>);
        }

        const board = [];
        for (let i=1; i<= this.state.numberOfRows; i++){
          board.push(columns);
          board.push(<br/>)
        }

        return (
          <div>
            <input type='number' value={this.state.numberOfRows} onChange={this.changeRowsAmount}/>
            <input type='number' value={this.state.numberOfColumns} onChange={this.changeColumnsAmount}/>
            <br />
            <br />
              {board}
          </div>
        );
    }
}

export default Game;
