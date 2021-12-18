import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './BackButton.module.css';
import { AiOutlineRollback } from 'react-icons/ai';

export default function BackButton(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      data-augmented-ui="all-hexangle-right border"
      className={classes.button_area_div}
    >
      <button
        onClick={() => navigate('/Backpack')}
        className={classes.back_button}
      >
        <AiOutlineRollback size={42} className={classes.back_button} />
      </button>
    </div>
  );
}
