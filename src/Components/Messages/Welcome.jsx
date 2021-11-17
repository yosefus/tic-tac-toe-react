import styles from './Welcome.module.css';

export default function Welcome({ setFormStart }) {
  return (
    <>
      <div onClick={() => setFormStart()} className={styles.wrapper}>
        <div className={styles.msgBox}>
          <div>
            <h1>ברוכים הבאים</h1>
            <h2>לאיקס עיגול</h2>
            המשחק המאתגר ביותר בעולם מאז השחמט
          </div>
        </div>
      </div>
    </>
  );
}
