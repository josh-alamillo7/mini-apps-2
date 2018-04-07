const changeGameLoss = (gameOver) => {
  return ({
    'type': 'CHANGE_GAME_OVER',
    gameOver
  })
}

export default changeGameLoss;