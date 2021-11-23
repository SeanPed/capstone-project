import React from 'react';
import classes from './Card.module.css';

export default function Card(): JSX.Element {
  return (
    <span className={classes.card}>
      <title></title>
      <p></p>
      <input type="number" />
    </span>
  );
}
