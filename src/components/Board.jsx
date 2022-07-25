import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
// Tictactoe game


const Board = () => {
  const [turn, setTurn] = useState()
  const [board, setBoard] = useState([])
  const [winner, setWinner] = useState()
  const [gameOver, setGameOver] = useState(false)
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)
  const [draws, setDraws] = useState(0)
  const [turns, setTurns] = useState(0)
  const [turnsPlayer1, setTurnsPlayer1] = useState(0)
  const [turnsPlayer2, setTurnsPlayer2] = useState(0)
  const [turnsDraw, setTurnsDraw] = useState(0)
  const [turnsPlayer1Win, setTurnsPlayer1Win] = useState(0)
  const [turnsPlayer2Win, setTurnsPlayer2Win] = useState(0)
  const [turnsDrawWin, setTurnsDrawWin] = useState(0)
  const combinationsForTicTactoe = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const checkWinner = () => {
    combinationsForTicTactoe.forEach(combination => {
      if (
        board[combination[0]] === board[combination[1]] &&
        board[combination[1]] === board[combination[2]] &&
        board[combination[0]] !== ''
      ) {
        setWinner(board[combination[0]])
        setGameOver(true)
        if (winner === 'X') {
          setTurnsPlayer1Win(turnsPlayer1Win + 1)
        } else if (winner === 'O') {
          setTurnsPlayer2Win(turnsPlayer2Win + 1)
        } else {
          setTurnsDrawWin(turnsDrawWin + 1)
        }
      }
    })
  }
  const checkDraw = () => {
    if (turns === 9) {
      setGameOver(true)
      setTurnsDraw(turnsDraw + 1)
    }
  }

  const setBoardState = (index, value) => {
    const newBoard = [...board]
    newBoard[index] = value
    setBoard(newBoard)
  }
  const setTurnState = (value) => {
    setTurn(value)
  }

  const handleClick = (index) => {
    if (board[index] === '' && !gameOver) {
      if (turn === 'X') {
        setBoardState(index, 'X')
        setTurnState('O')
        setTurns(turns + 1)
        setTurnsPlayer1(turnsPlayer1 + 1)
      } else if (turn === 'O') {
        setBoardState(index, 'O')
        setTurnState('X')
        setTurns(turns + 1)
        setTurnsPlayer2(turnsPlayer2 + 1)
      }
      checkWinner()
      checkDraw()
    }
  }
  const resetGame = () => {
    setBoard([])
    setTurn('')
    setWinner('')
    setGameOver(false)
    setTurns(0)
    setTurnsPlayer1(0)
    setTurnsPlayer2(0)
    setTurnsDraw(0)
    setTurnsPlayer1Win(0)
    setTurnsPlayer2Win(0)
    setTurnsDrawWin(0)
  }
  const handleReset = () => {
    resetGame()
  }
  const handlePlayer1 = (value) => {
    setPlayer1(value)
  }
  const handlePlayer2 = (value) => {
    setPlayer2(value)
  }
  const handlePlayer1Score = (value) => {
    setPlayer1Score(value)
  }
  const handlePlayer2Score = (value) => {
    setPlayer2Score(value)
  }
  const handleDraws = (value) => {
    setDraws(value)
  }
  const makeboard = () => {
    const board = []
    for (let i = 0; i < 9; i++) {
      board.push('')
    }
    return board
  }
  return 
   <Box>

   </Box>
  
}

export default Board