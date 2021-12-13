import React from 'react';
import Form from '../../components/Form/Form';
import BackButton from '../../components/BackButton/BackButton';
import classes from './InputPage.module.css';

export default function InputPage(): JSX.Element {
  return (
    <div className={classes.input_page_div}>
      <div className={classes.button_div}>
        <BackButton />
      </div>
      <div className={classes.placeholder_div}></div>
      <Form />
      <div className={classes.placeholder_div}></div>
    </div>
  );
}
