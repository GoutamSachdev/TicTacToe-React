import React from 'react'
import "./ScoreBoard.css"

const ScoreBoard = ({score,xPlaying,resetBoard,res}) => {
  const {xScore,oScore}=score;
  const handleClick = () => {
    resetBoard();
    res();
  };
  return (
    <div>
    <div className='scoreboard'>
      <span className={`score x-score ${!xPlaying && "inactive"}`}> 
       X - {xScore}
      
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`} >
      O - {oScore}
      </span>
       
    </div>
    <button className='rst-btn' onClick={handleClick}>
                    Restart
       </button>
    </div>

  )
}

export default ScoreBoard
