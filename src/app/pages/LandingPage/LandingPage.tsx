import React from 'react';
import classes from './LandingPage.module.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className={classes.landingpage_body}>
      <div className={classes.content_area_div}>
        <p className={classes.content_area_title}>Cyberbag</p>
        <button
          onClick={() => navigate('/Backpack')}
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
