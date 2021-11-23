import React from 'react';
import classes from './Card.module.css';

export default function Card(): JSX.Element {
  return (
    <span className={classes.card}>
      <title>Name des Gegenstandes</title>
      <p>Beschreibung des Gegenstandes</p>
      <label htmlFor="">
        Gewicht:
        <input type="number" />
      </label>
    </span>
  );
}
