import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Form from '../../components/Form/Form';
import classes from './InputPage.module.css';
import '../../../../node_modules/augmented-ui/augmented-ui.min.css';

export default function InputPage(): JSX.Element {
  return (
    <div className={classes.inputpage_div}>
      <div className={classes.button_div}>
        <BackButton />
      </div>
      <div className={classes.placeholder_div}></div>
      <Form />
      <div className={classes.placeholder_div}></div>
    </div>
  );
}
