import React from 'react';
import classes from './FormInputField.module.css';
type inputProps = {
  tagColor: string;
  tagText: string;
};

export default function FormInputField({
  tagColor,
  tagText,
}: inputProps): JSX.Element {
  return (
    <div className={classes.body_container}>
      <div
        data-augmented-ui="
    tr-clip border"
        className={`
          ${
            tagColor === 'Blue' ? classes.tag_color_blue : classes.tag_color_red
          }`}
      >
        {tagText}
      </div>
      <div
        data-augmented-ui="
    tr-clip bl-clip border"
        className={classes.input_container}
      >
        <input className={classes.input_field} type="text" />
      </div>
    </div>
  );
}
