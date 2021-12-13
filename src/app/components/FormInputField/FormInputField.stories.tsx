import React from 'react';
import FormInputField from './FormInputField';

export default {
  title: 'Component/FormInputField',
  component: FormInputField,
};

export const RegularBlue = (): JSX.Element => (
  <FormInputField tagColor="Blue" tagText="Item Name:" />
);
export const RegularRed = (): JSX.Element => (
  <FormInputField tagColor="Red" tagText="Item Description:" />
);
