import React from 'react';
import classes from './AddButton.module.css';
import { GiLightBackpack } from 'react-icons/gi';
import {useHistory} from "react-router-dom";

const HomeButton = () =>{
  let history = useHistory();
  const handleClick = () => {
   history.push("/input");
  }

export default function AddButton(): JSX.Element {
  return (
    <div
      data-augmented-ui="all-hexangle-up border"
      className={classes.button_area_div}
    >
      <button onClick={handleClick} className={classes.add_button_symbol}>
        <GiLightBackpack size={42} />
      </button>
    </div>
  );
}
