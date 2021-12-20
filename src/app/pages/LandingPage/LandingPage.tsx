import React, { useEffect, useState } from 'react';
import classes from './LandingPage.module.css';
import { useNavigate } from 'react-router-dom';
import LoadingBar from '../../components/LoadingBar/LoadingBar';

export default function LandingPage(): JSX.Element {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (completed === 100) {
        return;
      }
      setCompleted((prevCount) => prevCount + 1);
    }, 30);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [completed]);
  console.log(completed);
  return (
    <div className={classes.landingpage_body}>
      <div className={classes.content_area_div}>
        <p className={classes.content_area_title}>Cyberbag</p>
        <LoadingBar completedValue={completed} />
        {completed === 100 && (
          <button
            onClick={() => navigate('/Backpack')}
            data-augmented-ui="
        tl-clip br-clip border"
            className={classes.submit_button}
          >
            Start!
          </button>
        )}
      </div>
    </div>
  );
}
