import React from 'react';
import classes from './TopBar.module.css';

export default function TopBar(): JSX.Element {
  return (
    <div
      data-augmented-ui="
    tl-clip tr-clip  br-clip bl-clip border inlay"
      className={classes.topbar_section_div}
    >
      <p className={classes.topbar_content}>
        currently carried weight: (Placeholder) kg
      </p>
    </div>
  );
}
