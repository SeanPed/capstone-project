import React from 'react';
import classes from './Form.module.css';

export default function InputForm(): JSX.Element {
  return (
    <form
      className={classes.input_form}
      action=""
      data-augmented-ui="
  tl-2-clip-y tr-2-clip-y br-2-clip-y bl-2-clip-y border"
    >
      <br />
      <input
        data-augmented-ui="
        tl-clip tr-clip br-clip bl-clip"
        className={classes.input_field}
        type="text"
        autoComplete="off"
        placeholder="Name des Gegenstandes"
      />
      <div className={classes.spacing_div} />
      <textarea
        data-augmented-ui="
        tl-clip tr-clip br-clip bl-clip"
        className={classes.input_field}
        rows={5}
        placeholder="Beschreibung des Gegenstandes"
      ></textarea>
      <div className={classes.spacing_div} />
      <div className={classes.spacing_div} />
      <label className={classes.lable_weight}>
        Gewicht in Kilogramm <br />
        (0,2kg Schritte!)
      </label>
      <div className={classes.spacing_div} />
      <input
        data-augmented-ui="
      tl-clip br-clip"
        className={classes.input_field_weight}
        type="number"
        defaultValue={0.2}
        min={0.2}
        max={25}
        step={0.2}
      />
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

// ideas:
// <div class="title name" augmented-ui="tr-clip exe">Name of Item:</div>
//         <div class="message_container-alt">
//           <div class="message-alt" augmented-ui="exe bl-clip tr-clip">
//             <input class="input">
//             </input>
//           </div>
//         </div>
//
// CSS:
// input.input {
//   width: 100%;
//   padding: 12px 20px;
//   box-sizing: border-box;
//   background-color: black;
//   color: white;
//   border: 0px;
//   caret-color: #03d7f2;
//   caret-width: 10px; }
//
//  input[type="text"] {
//   background: transparent;
//   border: none;
//   border-bottom: 1px solid #000000;}
