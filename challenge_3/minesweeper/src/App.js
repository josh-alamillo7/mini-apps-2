import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import boardHelpers from './lib/boardHelpers'
import Board from './components/board.jsx'
import GameInfo from './components/gameinfo.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: boardHelpers.makeMinesweeperBoard(16, 16, 50),
      gameOver: false
    }
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(e) {
    if (this.state.gameOver) {
      console.log('you lost already :(')
      return
    }
    const paramValues = e.target.id.split(',')
    const inputParams = [Number(paramValues[0]), Number(paramValues[1])]
    const newGameInfo = boardHelpers.handleGridClick(this.state.board, inputParams)
    this.setState({
      board: newGameInfo.grid,
      gameOver: newGameInfo.lost
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MINESWEEPER</h1>
          <GameInfo gameOver={this.state.gameOver} />
        </header>
        <Board board={this.state.board} handleSquareClick={this.handleSquareClick}/>
      </div>
    );
  }
}

export default App;
