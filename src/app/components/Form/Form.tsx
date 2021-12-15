import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import FormInputField from '../FormInputField/FormInputField';
import classes from './Form.module.css';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import type { ItemCard } from '../../../types';

export default function InputForm(): JSX.Element {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemWeight, setItemWeight] = useState(0.2);
  const [itemCards, setItemCards] = useLocalStorage<ItemCard[]>(
    'itemCards',
    []
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const itemData = { itemName, itemDescription, itemWeight };
    const newItemCards = [...itemCards, itemData];
    setItemCards(newItemCards);
    navigate('/');
  }

  return (
    <form
      className={classes.input_form}
      onSubmit={handleSubmit}
      data-augmented-ui="
      tl-clip tr-clip br-clip bl-clip border"
    >
      <br />
      <FormInputField
        tagText="Name of item:"
        tagColor="Blue"
        defaultText={itemName}
        onChange={(event) => setItemName(event.target.value)}
      />
      <FormInputField
        tagText="Item Description:"
        tagColor="Red"
        defaultText={itemDescription}
        onChange={(event) => setItemDescription(event.target.value)}
      />
      <br />
      <label className={classes.lable_weight}>
        Gewicht in Kilogramm <br /> (0,2kg Schritte!)
        <input
          data-augmented-ui="
      tr-clip bl-clip"
          className={classes.input_field_weight}
          type="number"
          defaultValue={itemWeight}
          min={0.2}
          max={25}
          step={0.2}
          onChange={(event) => setItemWeight(parseFloat(event.target.value))}
        />
      </label>
      <br />
      <button
        data-augmented-ui="
        tl-clip br-clip"
        className={classes.submit_button}
      >
        Put it in the Backpack!
      </button>
    </form>
  );
}
