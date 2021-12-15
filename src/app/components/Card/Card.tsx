import React from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import classes from './Card.module.css';

type cardProps = {
  itemTitle: string;
  itemDescription: string;
  itemWeight: number;
};

export default function Card({
  itemTitle,
  itemDescription,
  itemWeight,
}: cardProps): JSX.Element {
  return (
    <div
      data-augmented-ui="
      tl-clip br-clip both"
      className={classes.card_body_div}
    >
      <div className={classes.delete_button}>
        <DeleteButton />
      </div>
      <p className={classes.item_name}>{itemTitle}</p>
      <p className={classes.item_description}>{itemDescription}</p>
      <div className={classes.weight_area}>
        <label>
          Gewicht: {itemWeight} kg
          {/* <input type="number" value={itemWeight} /> */}
        </label>
      </div>
    </div>
  );
}
