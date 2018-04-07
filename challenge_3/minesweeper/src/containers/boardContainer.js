import { connect } from 'react-redux';
import Board from '../components/board.jsx';
import changeGrid from '../actions/changeGrid.js';

const mapStateToProps = (state) => {
  return {
    board: state.board,
    gameOver: state.gameOver
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSquareClick: (e) => dispatch(changeGrid(e.target.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);