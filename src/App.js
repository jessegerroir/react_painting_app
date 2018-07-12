import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Board boardWidth='800' boardHeight='800'></Board>
      </div>
    );
  }
}

const Board = ({boardWidth, boardHeight}) => {
    const totalSquares = (boardWidth /50) *  (boardHeight /50);
    let tiles = [];
    for (let i = 0; i < totalSquares; i++) {
        tiles.push(<Tile></Tile>);
    }
    return(
        <div className='board'>
            {tiles}
        </div>
    )
}

class Tile extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="tile"></div>
        );
    }
}

class Game extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="tile"></div>
        );
    }
}

export default App;
