import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import boardHelpers from './lib/boardHelpers'
import Board from './components/board.jsx'
import BoardContainer from './containers/boardContainer'
import GameInfo from './components/gameinfo.jsx'

const App = (props) => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     gameOver: false
  //   }
    // this.handleSquareClick = this.handleSquareClick.bind(this);
  // }

  // handleSquareClick(e) {
  //   if (this.state.gameOver) {
  //     return
  //   }
  //   const paramValues = e.target.id.split(',')
  //   const inputParams = [Number(paramValues[0]), Number(paramValues[1])]
  //   const newGameInfo = boardHelpers.handleGridClick(this.state.board, inputParams)
  //   this.setState({
  //     board: newGameInfo.grid,
  //     gameOver: newGameInfo.gameOver
  //   })
  // }

  // resetBoard(difficulty) {
  //   const mapDifficultyToParams = {
  //     'beg': [10, 10, 10],
  //     'int': [16, 16, 50],
  //     'exp': [24, 24, 99] 
  //   }
  //   this.setState = {
  //     board: boardHelpers.makeMinesweeperBoard(16, 16, 50)
  //   }
  // }
// 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MINESWEEPER</h1>
          <GameInfo />
        </header>
        <BoardContainer />

      </div>
    );
}

export default App;
