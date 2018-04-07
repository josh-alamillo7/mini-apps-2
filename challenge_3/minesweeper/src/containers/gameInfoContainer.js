import { connect } from 'react-redux';
import GameInfo from '../components/gameinfo.jsx';
import changeGameLoss from '../actions/changeGameLoss.js';

const mapStateToProps = (state) => {
  return {
    gameOver: state.gameOver
  }
}

const mapDispatchToProps= (dispath) => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo)