const React = require('react');

const ResetButtons = ({ handleResetButtonClick }) => {
  return (
    <div>
      <button id="easy" onClick={handleResetButtonClick}>Easy</button>
      <button id="medium" onClick={handleResetButtonClick}>Medium</button>
      <button id="hard" onClick={handleResetButtonClick}>Hard</button>
    </div>)
}

export default ResetButtons;