import React from 'react';
import classes from './LoadingBar.module.css';

type LoadingBarProps = {
  completedValue: number;
};

export default function LoadingBar({
  completedValue,
}: LoadingBarProps): JSX.Element {
  const loadingBarStyling = {
    width: `${completedValue}%`,
  };

  return (
    <div className={classes.loadingBar_container}>
      <div style={loadingBarStyling} className={classes.loadingBar_div}></div>
    </div>
  );
}
