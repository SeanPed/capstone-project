import React from 'react';
import classes from './TopBar.module.css';

type TopBarProp = {
  currentWeight: number;
};

export default function TopBar({ currentWeight }: TopBarProp): JSX.Element {
  return (
    <div
      data-augmented-ui="
    tl-clip tr-clip  br-clip bl-clip border inlay"
      className={classes.topbar_section_div}
    >
      <p className={classes.topbar_content}>
        currently carried weight: <br />
        {currentWeight} / 20kg
      </p>
    </div>
  );
}
