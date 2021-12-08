import React from 'react';
import InputPage from './InputPage';

export default {
  title: 'Page/InputPage',
  component: InputPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const inputPage = (): JSX.Element => <InputPage />;
