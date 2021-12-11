import React from 'react';
import classes from './Form.module.css';

export default function InputForm(): JSX.Element {
  return (
    <form
      className={classes.input_form}
      action=""
      data-augmented-ui="
  tl-2-clip-y tr-2-clip-y br-2-clip-y bl-2-clip-y border"
    >
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
      <div className={classes.spacing_div} />
      <label className={classes.lable_weight}>
        Gewicht in Kilogramm <br />
        (0,2kg Schritte!)
      </label>
      <div className={classes.spacing_div} />
      <input
        className={classes.input_field_weight}
        type="number"
        defaultValue={0.2}
        min={0.2}
        max={25}
        step={0.2}
      />
      <div className={classes.spacing_div} />
      <div className={classes.spacing_div} />
      <div className={classes.spacing_div} />
      <button className={classes.submit_button}>Put it in the Backpack!</button>
    </form>
  );
}
