import React from 'react';
import classes from './LandingPage.module.css';

export default function LandingPage(): JSX.Element {
  return (
    <div className={classes.landingpage_body}>
      <div className={classes.content_area_div}>
        <p className={classes.content_area_title}>Cyberbag</p>
        <button
          data-augmented-ui="
        tl-clip br-clip border"
          className={classes.submit_button}
        >
          Start!
        </button>
      </div>
    </div>
  );
}
