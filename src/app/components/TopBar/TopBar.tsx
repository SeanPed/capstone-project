import React from 'react';
import classes from './TopBar.module.css';

export default function (): JSX.Element {
  return (
    <div className={classes.topbar_body_div}>
      <div className={classes.topbar_tag_div}>
        <p>Weight Value</p>
      </div>
    </div>
  );
}
