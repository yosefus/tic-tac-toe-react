import React from 'react';
import styles from './Box.module.css';

export default function Box({ shape, id }) {
  return (
    <div id={id} className={`${styles.box}`}>
      {shape}
    </div>
  );
}
