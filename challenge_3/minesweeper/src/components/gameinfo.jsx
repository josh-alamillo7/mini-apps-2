const React = require('react')

const gameInfo = ({ gameOver }) => {
  if (gameOver) {
    return (
    <div className="GameInfo">You lost 😢</div>)
  } else {
    return (<div> </div>)
  }
  
}

export default gameInfo