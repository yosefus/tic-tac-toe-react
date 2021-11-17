import { Form, InputGroup, FormControl } from 'react-bootstrap';
import styles from './StartForm.module.css';

export default function StartForm({ setStart, setPlayersNames, playersNames }) {
  const onChangeNames = ({ target: input }) => {
    let temp = { ...playersNames };
    temp[input.name] = input.value;
    setPlayersNames(temp);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setStart(true);
  };

  const submitBtn = (
    <button type="submit">
      <svg width="277" height="62">
        <defs>
          <linearGradient id="grad1">
            <stop offset="0%" stopColor="#FF8282" />
            <stop offset="100%" stopColor="#E178ED" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
      </svg>
      <span>בוא נתחיל</span>
    </button>
  );

  return (
    <>
      <div className={styles.wrapper}>
        <Form className={`${styles.form} scale-in-center`} onSubmit={submitForm}>
          <h2 dir="rtl">אז מי אתם?</h2>
          <InputGroup dir="rtl">
            <FormControl
              name="x"
              onChange={(e) => onChangeNames(e, 'x')}
              placeholder="שחקן x"
              required
              type="text"
            />
          </InputGroup>
          <InputGroup dir="rtl">
            <FormControl
              name="o"
              onChange={(e) => onChangeNames(e, 'o')}
              placeholder="שחקן o"
              required
              type="text"
            />
          </InputGroup>
          {submitBtn}
        </Form>
      </div>
    </>
  );
}
