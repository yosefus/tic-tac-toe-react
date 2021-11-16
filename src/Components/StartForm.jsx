import React, { useState, useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import TicTacToe from '../Pages/TicTacToe';
import styles from './StartForm.module.css';

export default function StartForm() {
  const [start, setStart] = useState(false),
    [playersNames, setPlayersName] = useState({ x: '', o: '' });

  const onChangeNames = ({ target: input }) => {
    let temp = { ...playersNames };
    temp[input.name] = input.value;
    setPlayersName(temp);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setStart(true);
  };

  useEffect(() => {
    console.log(playersNames);
  }, [playersNames]);
  return (
    <>
      {!start ? (
        <div className={styles.wrapper}>
          <Form onSubmit={submitForm}>
            <InputGroup>
              <input
                name="x"
                onChange={(e) => onChangeNames(e, 'x')}
                placeholder="שחקן x"
                required
                type="text"
              />
              <input
                name="o"
                onChange={(e) => onChangeNames(e, 'o')}
                placeholder="שחקן o"
                required
                type="text"
              />
              <input type="submit" />
            </InputGroup>
          </Form>
        </div>
      ) : (
        <TicTacToe playersNames={playersNames} />
      )}
    </>
  );
}
