import React from 'react';
import Box from './Box';
import styles from './Table.module.css';

export default function Table({ boardState, onClickBox }) {
  const [board] = boardState;

  return (
    <div className={`${styles.table} d-flex justify-content-center`}>
      {board.map((box, i) => (
        <div key={i} onClick={() => onClickBox(i)}>
          <Box id={`cell${i}`} shape={box} />
        </div>
      ))}
    </div>
  );
}
