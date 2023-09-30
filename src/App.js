
import './App.css';
import React, { useState } from 'react';
import { Board } from './Components/Board';
import ScoreBoard from './Components/ScoreBoard';

function App() {
  const WINNING_CON = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

  ]




  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)
  const [ tuning , setTuning]=useState(`Player ${xPlaying === true ? "X" : "O"}, it's your turn!`)
  const checkAll = (board) => {
    for (let i = 0; i < WINNING_CON.length; i++) {
      const [x, y, z] = WINNING_CON[i]

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {


        setGameOver(true)

        setTimeout(() => { setBoard(Array(9).fill(null)) }, 3000)
        return board[y]
      }
      
    }
    if (board.every((value) => value !== null)
        && board.every((value) => value == "X" || value == "O")) {
        return "D";
      }
  }

  const resetBoard = () => {



    setGameOver(false)
    setBoard(Array(9).fill(null))
    setTuning(`Player ${!xPlaying === true ? "X" : "O"}, it's your turn!`)
  }
  const res = () => {
    let { oScore } = score;
    oScore = 0;

    let { xScore } = score;
    xScore = 0;
    setScore({ ...score, xScore, oScore })
  }
  const handleBoxClick = (boxid) => {
    const updateBoard = board.map((value, id) => {
      if (id === boxid) {
        setTuning(`Player ${!xPlaying === true ? "X" : "O"}, it's your turn!`)
        return xPlaying === true ? "X" : "O"
      } else {
        setTuning(`Player ${!xPlaying === true ? "X" : "O"}, it's your turn!`)
        return value;
      }
     
    })
    const checkDraw = () => {

    }

    setBoard(updateBoard);
    setXPlaying(!xPlaying)
    const winner = checkAll(updateBoard)

    if (winner) {

      if (winner === "O") {
        setTuning("O Winner")
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore })
      }
      else if (winner === "X") {
        setTuning("X Winner")
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore })
        
      }
      else {
        setTuning("Draw")
        setGameOver(true)

        setTimeout(() => { setBoard(Array(9).fill(null)) }, 5000)
       
      }

      setTimeout(() => {
        setTuning(`Player ${!xPlaying === true ? "X" : "O"}, it's your turn!`)
      }, 4000);


    }

  }
  return (
    <div className="App">

      <span className="heading">{tuning}</span>
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ScoreBoard score={score} xPlaying={xPlaying} resetBoard={resetBoard} res={res} />

    </div>
  );
}

export default App;
