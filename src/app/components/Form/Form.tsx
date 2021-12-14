import React, { useState } from 'react';
import FormInputField from '../FormInputField/FormInputField';
import classes from './Form.module.css';

export default function InputForm(): JSX.Element {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemWeight, setItemWeight] = useState(0.2);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    return console.log('hello');
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
        textRows={1}
        defaultText={itemName}
      />
      <FormInputField
        tagText="Item Description:"
        tagColor="Red"
        textRows={5}
        defaultText={itemDescription}
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
