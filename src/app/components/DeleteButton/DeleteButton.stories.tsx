import React from 'react';
import DeleteButton from './DeleteButton';

export default {
  title: 'Component/DeleteButton',
  component: DeleteButton,
};

export const Regular = (): JSX.Element => (
  <DeleteButton
    deleteFunction={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);
