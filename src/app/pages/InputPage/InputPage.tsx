import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Form from '../../components/Form/Form';
import classes from './InputPage.module.css';

export default function InputPage(): JSX.Element {
  return (
    <div className={classes.inputpage_div}>
      <div className={classes.button_div}>
        <BackButton />
      </div>
      <div className={classes.form_div}>
        <Form />
      </div>
    </div>
  );
}
