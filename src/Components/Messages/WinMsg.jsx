import React from 'react';
import styles from './WinMsg.module.css';
import link from '../../Media/win.mp4';

export default function WinMsg({ winner, setWinner }) {
  return (
    <>
      <div className={`${styles.background} bg-dark scale-in-center-i`}>
        <video className={styles.bgVideo} src={link} loop autoPlay></video>
        <div onClick={() => setWinner()} className={`${styles.winWrapper} scale-in-center`}>
          <div className={`${styles.winBox} scale-in-center`}>
            <h1 dir="rtl">{winner.name} המנצח\ת!</h1>
          </div>
        </div>
      </div>
    </>
  );
}
