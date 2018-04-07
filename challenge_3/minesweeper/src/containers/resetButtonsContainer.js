import {connect} from 'react-redux';
import ResetButtons from '../components/resetbuttons.jsx';
import startNewGame from '../actions/startNewGame.js';

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleResetButtonClick: (e) => dispatch(startNewGame(e.target.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetButtons);