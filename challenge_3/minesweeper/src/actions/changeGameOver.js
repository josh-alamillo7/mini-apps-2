const changeGameOver = (bool) => {
  return ({
    'type': 'CHANGE_GAME_OVER',
    'gameEnd': bool
  })
}

export default changeGameOver