const startNewGame = (difficulty) => {
  return ({
    'type': 'START_NEW_GAME',
    difficulty
  })
}

export default startNewGame