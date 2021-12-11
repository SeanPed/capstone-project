import React from 'react';
import Form from '../../components/Form/Form';
import classes from './InputPage.module.css';

export default function InputPage(): JSX.Element {
  return (
    <div className={classes.body_div}>
      <div className={classes.placeholder_div}></div>
      <Form />
      <div className={classes.placeholder_div}></div>
    </div>
  );
}
