const React = require('react')

const GameInfo = ({ gameOver }) => {
  if (gameOver === 'win') {
    return (
    <div className="GameInfo">You win 😎</div>)
  } else if (gameOver) {
    return (
      <div className="GameInfo">You lost 😢</div>
      )
  } else {
    return (<div> </div>)
  }
  
}

export default GameInfo