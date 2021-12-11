import React from 'react';
import classes from './AddButton.module.css';
import { GiLightBackpack } from 'react-icons/gi';

export default function AddButton(): JSX.Element {
  return (
    <div
      data-augmented-ui="all-hexangle-up border"
      className={classes.button_area_div}
    >
      <button onClick={alert} className={classes.add_button_symbol}>
        <GiLightBackpack size={42} />
      </button>
    </div>
  );
}
