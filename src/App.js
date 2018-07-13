import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function getRandomColour(){
    //list of colours that the tiles can be
    const colours = ["#990000", "#000099", "#004C00", "#e59400"];
    return colours[Math.floor((Math.random() * 4))];
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Game></Game>
      </div>
    );
  }
}

//this is a board component. It has no changing state. It simply organizes the board for display.
const Board = ({boardWidth, boardHeight, tiles}) => {
    const pStyle = {
        width: boardHeight + "px",
        height: boardHeight + "px"
    };
    return(
        <div className='board' style={pStyle}>
            {tiles}
        </div>
    )
}

//this is a tile class. We need it to be a class as it has a changing state.
class Tile extends Component{
    constructor(props){
        super(props);
        //we store all the internal variables that can change in the state
        this.state = {
            colour: getRandomColour(),
        };

        //binding the button event handler, we have to bind it so it can use 'this' state in it
        this.onTileClick.bind(this);
    }

    onTileClick(){
        const { colour } = this.state;
        this.setState({colour: getRandomColour()});
    }

    render(){
        return(
            <div className="tile" style={{'background-color': this.state.colour}}  onClick={() => this.onTileClick()}></div>
        );
    }
}

class Game extends Component{
    constructor(props){
        super(props);
        const size = (800 /50);
        //calculate the board size and number of tiles to cover it on the fly
        let tiles = [];
        for (let x = 0; x < size; x++) {
            let tempArray = [];
            for (let y = 0; y < size; y++) {
                tempArray.push(<Tile colour={getRandomColour()}></Tile>);
            }
            tiles.push(tempArray);
        }

        this.state = {
            tiles: tiles,
        };
    }

    render(){
        return(
            <div className="Game">
                <Board boardWidth='800' boardHeight='800' tiles={this.state.tiles}></Board>
            </div>
        );
    }
}

export default App;
