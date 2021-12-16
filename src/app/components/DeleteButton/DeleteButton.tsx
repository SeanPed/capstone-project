import React from 'react';
import classes from './DeleteButton.module.css';
import { TiDeleteOutline } from 'react-icons/ti';

type DeleteButtonProps = {
  deleteFunction: () => void;
};

export default function DeleteButton({
  deleteFunction,
}: DeleteButtonProps): JSX.Element {
  return (
    <button onClick={deleteFunction} className={classes.delete_button}>
      <TiDeleteOutline size={12} />
    </button>
  );
}
