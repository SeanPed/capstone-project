import React from 'react';
import './Form.module.css';

export default function Form(): JSX.Element {
  return (
    <form action="">
      <label>
        Name des Gegenstandes
        <br />
        <input type="text" autoComplete="off" placeholder="Test" />
      </label>
      <label>
        Beschreibung des Gegenstandes
        <br />
        <textarea rows={5}></textarea>
      </label>
      <label>
        Gewicht
        <br />
        <br />
        <input type="number" defaultValue={0.5} min={0.5} max={25} step={0.5} />
        <br />
      </label>
      <br />
      <br />
      <input className="buttonmeBaby" type="submit" value="Submit" />
    </form>
  );
}
