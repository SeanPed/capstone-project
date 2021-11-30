import React from 'react';
import './Form.module.css';

export default function Form(): JSX.Element {
  return (
    <form action="">
      <label>
        Name des Gegenstandes
        <br />
        <input type="text" />
      </label>
      <label>
        Beschreibung des Gegenstandes
        <br />
        <textarea rows={5}></textarea>
      </label>
      <label className={styles.label_priority}>
        Movie Rating
        <br />
        <input type="number" defaultValue={0.5} min={0.5} max={25} />
        <br />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
