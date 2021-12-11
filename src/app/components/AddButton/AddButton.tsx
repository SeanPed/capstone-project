import React from 'react';
import classes from './AddButton.module.css';
import { GiLightBackpack } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function AddButton(): JSX.Element {
  return (
    <div
      data-augmented-ui="all-hexangle-up border"
      className={classes.button_area_div}
    >
      <Link to="/input" />
      <button className={classes.add_button_symbol}>
        <GiLightBackpack size={42} />
      </button>
    </div>
  );
}
