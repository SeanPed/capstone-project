import React from 'react';
import classes from './MalusBar.module.css';

export default function MalusBar(): JSX.Element {
  return (
    <div className={classes.malusBar_container}>
      <p className={classes.malusBar_text}>Overweight! You carry too much!</p>
    </div>
  );
}
