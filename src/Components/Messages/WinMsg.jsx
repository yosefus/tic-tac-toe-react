import React from 'react';
import styles from './WinMsg.module.css';

export default function WinMsg({ winner }) {
  return (
    <div className={`${styles.winWrapper}`}>
      <div className={`${styles.winBox}`}>{winner.name} wins</div>
    </div>
  );
}
