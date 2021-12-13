import React from 'react';
import FormInputField from './FormInputField';

export default {
  title: 'Component/FormInputField',
  component: FormInputField,
};

export const RegularBlue = (): JSX.Element => (
  <FormInputField tagColor="Blue" />
);
export const RegularRed = (): JSX.Element => <FormInputField tagColor="Red" />;
