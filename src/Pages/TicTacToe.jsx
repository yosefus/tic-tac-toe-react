import { useEffect, useState } from 'react';
// Components
import { WinMsg, Table, PlayersBox } from '../Components';
// style
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './TicTacToe.module.css';
import { BsArrowClockwise, BsArrowLeftShort } from 'react-icons/bs/';
// vars
import { emptyBoard, winConditions } from '../StaticVars';
import { Button } from 'react-bootstrap';

export default function TicTacToe({ playersNames }) {
  const [players, setPlayers] = useState({
      player1: { shape: 'x', wins: 0, name: playersNames['x'] },
      player2: { shape: 'o', wins: 0, name: playersNames['o'] },
    }),
    { player1, player2 } = players;

  const [winner, setWinner] = useState(),
    [currentPlayer, setCurrentPlayer] = useState(player1),
    [board, setBoard] = useState(emptyBoard),
    [playsOrder, setPlaysOrder] = useState([]),
    [ties, setTies] = useState(0);

  const onClickBox = (index) => {
    if (!board[index]) {
      setBoard(board.map((item, i) => (i === index && !item ? currentPlayer.shape : item)));
      setPlaysOrder([...playsOrder, index]);
    }
  };

  const changeCurrentPlayer = () => setCurrentPlayer(currentPlayer === player1 ? player2 : player1);

  const checkWins = (lastAction) => {
    const possibleWinConditions = winConditions.filter((condition) => condition.includes(lastAction));

    let winner;

    possibleWinConditions.forEach((arrWin) => {
      if (board[arrWin[0]] === board[arrWin[1]] && board[arrWin[0]] === board[arrWin[2]])
        winner = board[arrWin[0]] === 'x' ? player1 : player2;
    });

    return winner;
  };

  const winActions = (winner) => {
    setWinner(winner);
    resetTheGame();
    addWinsToPlayer(winner);
  };

  const addWinsToPlayer = (winner) => {
    let tempPlayers = { ...players };
    winner.shape === 'x' ? tempPlayers['player1'].wins++ : tempPlayers['player2'].wins++;
    setPlayers(tempPlayers);
  };

  const resetTheGame = () => {
    setCurrentPlayer(player1);
    setBoard(emptyBoard);
    setPlaysOrder([]);
  };

  const tieActions = () => {
    setTies((tie) => tie + 1);
    resetTheGame();
  };

  const goBackOnePlay = () => {
    const { length } = playsOrder;

    if (length) {
      board[playsOrder[length - 1]] = '';
      setPlaysOrder(playsOrder.filter((p, i) => i !== length - 1));
    }
  };

  //   useEffect(() => {
  //     console.log(playsOrder, board);
  //   }, [playsOrder]);

  useEffect(() => {
    if (playsOrder.length > 4) {
      let winner = checkWins(playsOrder[playsOrder.length - 1]);
      if (winner) return winActions(winner);
    }

    if (playsOrder.length === 9) return tieActions();

    changeCurrentPlayer();
  }, [board, playsOrder]);

  const ButtonGroupTable = () => (
    <div className={styles.btnGroup}>
      <Button disabled={!playsOrder.length && true} onClick={resetTheGame} variant="outline-danger">
        <BsArrowClockwise className="me-1" /> אתחל משחק
      </Button>
      <Button disabled={!playsOrder.length && true} onClick={goBackOnePlay} variant="outline-info">
        <BsArrowLeftShort className="me-1" />
        חזור
      </Button>
    </div>
  );

  return (
    <div className={styles.ticPage}>
      <PlayersBox players={players} ties={ties} />
      <Table board={board} onClickBox={onClickBox} />
      <ButtonGroupTable />
      {winner && <WinMsg winner={winner} setWinner={setWinner} />}
    </div>
  );
}
