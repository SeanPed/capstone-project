import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BackButton.module.css';

export default function BackButton(): JSX.Element {
  return (
    <div
      data-augmented-ui="all-hexangle-down border"
      className={classes.button_area_div}
    >
      <Link to="/">
        <button className={classes.back_button_symbol}></button>
      </Link>
    </div>
  );
}
