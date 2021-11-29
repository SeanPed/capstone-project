import React from 'react';
import './Card.module.css';

export default function Card(): JSX.Element {
  return (
    <span className="card12">
      <div className="card--header">
        <h2>Name des Gegenstandes</h2>
      </div>
      <hr />
      <div className="card--body">
        <div className="card--content">
          <h4>Art des Gegenstandes</h4>
        </div>
        <div className="card--content">
          <h4>
            Gewicht:
            <input type="number" />
          </h4>
        </div>
      </div>
      <hr />
    </span>
  );
}
