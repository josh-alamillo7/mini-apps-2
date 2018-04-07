import boardHelpers from '../lib/boardHelpers';
import Redux from 'redux';
import _ from 'lodash';

const initialState = {

  board: boardHelpers.makeMinesweeperBoard(16, 16, 50),
  gameOver: false
}

//takes in old state, new params
const boardReducer = (state = initialState, action) => {
  if (state.gameOver) {
    return state
  }

  switch(action.type) {
  case 'CHANGE_GRID':
    const boardClone = _.cloneDeep(state.board)
    const paramValues = action.id.split(',')
    const inputParams = [Number(paramValues[0]), Number(paramValues[1])]
    const newGameInfo = boardHelpers.handleGridClick(boardClone, inputParams)
    return {
      board: newGameInfo.board,
      gameOver: newGameInfo.gameOver
    }
  
  case 'CHANGE_GAME_LOSS':
    return {
      board: state.board,
      gameOver: action.gameOver
    }

  case 'START_NEW_GAME':
    const difficultyToParams = {
      'easy': [10, 10, 10],
      'medium': [16, 16, 50],
      'hard': [18, 30, 99],
    }
    const boardParams = difficultyToParams[action.difficulty]

    return {
      board: boardHelpers.makeMinesweeperBoard(boardParams[0], boardParams[1], boardParams[2]),
      gameOver: false
    }

  default:
    return state
  }
}

export default boardReducer