import React from 'react';
import classes from './DeleteButton.module.css';
import { TiDeleteOutline } from 'react-icons/ti';

export default function DeleteButton(): JSX.Element {
  return (
    <button className={classes.delete_button}>
      <TiDeleteOutline size={28} />
    </button>
  );
}
