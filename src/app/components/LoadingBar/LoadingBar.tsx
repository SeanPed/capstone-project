import React from 'react';
import classes from './LoadingBar.module.css';

export default function LoadingBar(): JSX.Element {
  return (
    <div className={classes.progress_bar}>
      <span className={classes.bar}>
        <span className={classes.progress}></span>
      </span>
    </div>
  );
}
