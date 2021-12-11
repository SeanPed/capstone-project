import React from 'react';
import AddButton from '../../components/AddButton/AddButton';
import Card from '../../components/Card/Card';

import classes from './MainPage.module.css';

export default function MainPage(): JSX.Element {
  return (
    <div className={classes.body_div}>
      <div className={classes.header_div}>
        <h1>Hello World</h1>
      </div>
      <div className={classes.card_area_div}>
        <div className={classes.button_div}>
          <AddButton />
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
