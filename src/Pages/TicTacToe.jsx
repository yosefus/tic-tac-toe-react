import React, { useEffect, useState } from 'react';
import Table from '../Components/Table';
// style
import 'bootstrap/dist/css/bootstrap.min.css';
import WinMsg from '../Components/Messages/WinMsg';
// vars
import { emptyBoard, winConditions, moves } from '../StaticVars';

export default function TicTacToe() {
  const [players, setPlayers] = useState({
      player1: { shape: 'x', wins: 0, name: 'avi' },
      player2: { shape: 'o', wins: 0, name: 'mike' },
    }),
    { player1, player2 } = players;

  const [winner, setWinner] = useState(),
    [currentPlayer, setCurrentPlayer] = useState(player1),
    [board, setBoard] = useState(emptyBoard);

  const onClickBox = (index) => {
    if (board[index]) return null;

    let tempBoard = [...board];
    tempBoard[index] = currentPlayer.shape;
    setBoard(tempBoard);

    moves.order.push(index);

    if (moves.order.length > 4 && checkWins(index, tempBoard)) return winActions();

    changeCurrentPlayer();
  };

  const changeCurrentPlayer = () => setCurrentPlayer(currentPlayer == player1 ? player2 : player1);

  function checkWins(lastAction, tempBoard) {
    const possibleWinConditions = winConditions.filter((condition) => condition.includes(lastAction));

    let win;
    possibleWinConditions.forEach((arrWin) => {
      if (
        tempBoard[arrWin[0]] &&
        tempBoard[arrWin[0]] === tempBoard[arrWin[1]] &&
        tempBoard[arrWin[0]] === tempBoard[arrWin[2]]
      )
        win = true;
    });

    if (win) return true;
  }

  const winActions = () => {
    setWinner(currentPlayer);
    resetTheGame();
    addWinsToPlayer();
  };

  const addWinsToPlayer = () => {
    let tempPlayers = { ...players };
    currentPlayer === player1 ? tempPlayers['player1'].wins++ : tempPlayers['player2'].wins++;
    setPlayers(tempPlayers);
  };

  const resetTheGame = () => {
    setCurrentPlayer(player1);
    setBoard(emptyBoard);
    moves.resetOrders();
  };

  //   useEffect(() => {
  //     let win;
  //     if (PlaysOrder.length > 4) win = checkWins(PlaysOrder[PlaysOrder.length - 1]);
  //     if (!win) changeCurrentPlayer();
  //   }, [board]);

  return (
    <div>
      <Table board={board} onClickBox={onClickBox} />
      {winner ? (
        <div onClick={() => setWinner()}>
          <WinMsg winner={winner} />
        </div>
      ) : null}
    </div>
  );
}
