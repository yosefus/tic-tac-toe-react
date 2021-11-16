import React from 'react';
import styles from './Box.module.css';

export default function Box({ shape, id, i }) {
  return (
    <div id={id} className={`${styles.box} roll-in-left${i} `}>
      {shape}
    </div>
  );
}
