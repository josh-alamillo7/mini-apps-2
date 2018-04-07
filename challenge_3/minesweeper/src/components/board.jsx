import React from 'react';

const Board = ( {board, handleSquareClick} ) => {
  return (
    <div>
      {board.map((row, rowIndex) => {
        return (
          <div>{row.map((column, colIndex) => {

          if (column[1] === 0) {
            return (
              <span className="square" id={`${rowIndex},${colIndex}`} onClick={handleSquareClick}>*</span>
              )
          } else {
              return (
                <span className={`square${column[0]}`} id={`${rowIndex},${colIndex}`} onClick={handleSquareClick}>{column[0]}</span>
                )
            }      
          })
          }
          </div>
        )
        })
      }
    </div>
  )
}

export default Board;