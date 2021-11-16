import React from 'react';
import { Box } from './';
import styles from './Table.module.css';

export default function Table({ board, onClickBox }) {
  return (
    <div className={`${styles.table} `}>
      {board.map((box, i) => (
        <div key={i} onClick={() => onClickBox(i)}>
          <Box i={i} id={`cell${i}`} shape={box} />
        </div>
      ))}
    </div>
  );
}
