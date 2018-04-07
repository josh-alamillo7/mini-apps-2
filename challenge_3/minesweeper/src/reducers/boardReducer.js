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
    console.log(newGameInfo)
    return {
      board: newGameInfo.board,
      gameOver: newGameInfo.gameOver}
    
  default:
    return state
  }
}

export default boardReducer