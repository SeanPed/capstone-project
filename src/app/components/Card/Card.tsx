import React from 'react';
import classes from './Card.module.css';

export default function Card(): JSX.Element {
  return (
    <div
      data-augmented-ui="
      tl-clip br-clip both"
      className={classes.card_body_div}
    >
      <p className={classes.item_name}>Alte kriegsaxt</p>
      <p className={classes.item_description}>
        Eine Alte stumpfe Kriegsaxt, kaum zu gebrauchen, Stiel scheint morsch zu
        sein. Schneide hat Kanten.
      </p>
      <div className={classes.weight_area}>
        <label>
          Gewicht:
          <input type="number" />
        </label>
      </div>
    </div>
  );
}
