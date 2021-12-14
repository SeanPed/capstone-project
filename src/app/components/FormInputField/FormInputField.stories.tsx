import React from 'react';
import FormInputField from './FormInputField';

export default {
  title: 'Component/FormInputField',
  component: FormInputField,
};

export const RegularBlue = (): JSX.Element => (
  <FormInputField
    tagColor="Blue"
    tagText="Item Name:"
    textRows={1}
    defaultText=""
  />
);
export const RegularRed = (): JSX.Element => (
  <FormInputField
    tagColor="Red"
    tagText="Item Description:"
    textRows={5}
    defaultText=""
  />
);
