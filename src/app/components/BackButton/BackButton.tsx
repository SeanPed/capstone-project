import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BackButton.module.css';
import { AiOutlineRollback } from 'react-icons/Ai';

export default function BackButton(): JSX.Element {
  return (
    <div
      data-augmented-ui="all-hexangle-right border"
      className={classes.button_area_div}
    >
      <Link to="/">
        <button className={classes.back_button_symbol}>
          <AiOutlineRollback size={42} className={classes.back_button_symbol} />
        </button>
      </Link>
    </div>
  );
}
