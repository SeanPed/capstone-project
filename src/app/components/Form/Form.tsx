import React from 'react';
import classes from './Form.module.css';

export default function InputForm(): JSX.Element {
  return (
    <form action="">
      <label className={classes.labelTitle}>
        Name des Gegenstandes
        <br />
        <input type="text" autoComplete="off" />
      </label>
      <label>
        Beschreibung des Gegenstandes
        <br />
        <textarea rows={5}></textarea>
      </label>
      <label>
        Gewicht
        <br />
        <br />
        <input type="number" defaultValue={0.5} min={0.5} max={25} step={0.5} />
        <br />
      </label>
      <br />
      <br />
      <input className={classes.inputButton} type="submit" value="Submit" />
    </form>
  );
}
