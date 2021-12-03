import React from 'react';
import classes from './Form.module.css';

export default function InputForm(): JSX.Element {
  return (
    <form className={classes.input_form} action="">
      <br />
      <input
        className={classes.input_field}
        type="text"
        autoComplete="off"
        placeholder="Name des Gegenstandes"
      />
      <div className={classes.spacing_div} />
      <textarea
        className={classes.input_field}
        rows={5}
        placeholder="Beschreibung des Gegenstandes"
      ></textarea>
      <div className={classes.spacing_div} />

      <input
        className={classes.input_field_weight}
        type="number"
        placeholder="Gewicht"
        defaultValue={0.2}
        min={0.2}
        max={25}
        step={0.2}
      />
      <div className={classes.spacing_div} />
      <label>
        Gewicht in Kilogramm <br /> (0,2 kg Schritte Möglich)
        <br />
      </label>
      <br />
      <br />
      <button className={classes.submit_button}>Put it in the Backpack!</button>
    </form>
  );
}
