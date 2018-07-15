import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const colours = ["#990000", "#000099", "#004C00", "#e59400"];

function getRandomColour(){
    //list of colours that the tiles can be
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
const Board = ({boardWidth, boardHeight, selectedColour}) => {
    const pStyle = {
        width: boardHeight + "px",
        height: boardHeight + "px"
    };

    let tiles = [];
    for (let x = 0; x < (boardWidth /50) * (boardHeight /50); x++) {
        tiles.push(<Tile selectedColour={selectedColour}></Tile>);
    }


    return(
        <div className='board' style={pStyle}>
            {tiles}
        </div>
    )
};

const Swatch = (props) => {
    return(
      <div className='swatch' style={{'background-color': props.colour}} onClick={props.onSwatchClick}></div>
    )
};

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

    onTileClick(selectedColour){
        this.setState({colour: selectedColour});
    }

    render(){
        return(
            <div className="tile" style={{'background-color': this.state.colour}}  onClick={() => this.onTileClick(this.props.selectedColour)}></div>
        );
    }
}

class Game extends Component{
    constructor(props){
        super(props);

        //init the swatches
        let swatches = [];
        for (let i = 0; i < colours.length; i++) {
            swatches.push({colour: colours[i]});
        }

        this.state = {
            swatches,
            selectedColour: colours[0],
        };

        //bind the handler so it can access this
        this.selectColour = this.selectColour.bind(this);

    }

    selectColour(colour){
        this.setState({ selectedColour: colour });
    }

    render(){
        const { swatches, selectedColour} = this.state;
        return(
            <div className="game">
                <div className="toolbar">
                    {swatches.map(swatch =>
                        <Swatch colour={swatch.colour} onSwatchClick={() => this.selectColour(swatch.colour)}></Swatch>
                    )}
                </div>
                <Board boardWidth='800' boardHeight='800' selectedColour={selectedColour}></Board>
            </div>
        );
    }
}

export default App;
