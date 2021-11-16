import React, { useState } from 'react';
import styles from './Welcome.module.css';
import { StartForm } from './../';

export default function Welcome() {
  const [Visable, setVisable] = useState(true);

  return (
    <>
      {Visable ? (
        <div onClick={() => setVisable()} className={styles.wrapper}>
          <div className={styles.msgBox}>
            <div>
              <h1>ברוכים הבאים</h1>
              <h2>לאיקס עיגול</h2>
              המשחק המאתגר ביותר בעולם מאז השחמט
            </div>
          </div>
        </div>
      ) : (
        <StartForm />
      )}
    </>
  );
}
