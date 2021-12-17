import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const Cardtest = (): JSX.Element => (
  <Card
    itemTitle={''}
    itemDescription={''}
    itemWeight={0}
    deleteFunction={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);
