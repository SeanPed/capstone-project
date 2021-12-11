import React from 'react';
import classes from './AddButton.module.css';
import { GiLightBackpack } from 'react-icons/gi';

export default function AddButton(): JSX.Element {
  return (
    <button className={classes.add_button}>
      <GiLightBackpack size={42} className={classes.add_button_symbol} />
    </button>
  );
}
