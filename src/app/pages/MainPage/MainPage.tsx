import React from 'react';
import AddButton from '../../components/AddButton/AddButton';
import Card from '../../components/Card/Card';
import TopBar from '../../components/TopBar/TopBar';

import classes from './MainPage.module.css';

export default function MainPage(): JSX.Element {
  return (
    <div className={classes.mainpage_div}>
      <div className={classes.header_div}>
        <TopBar />
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
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
