import React from 'react';
import MainPage from './MainPage';

export default {
  title: 'Page/MainPage',
  component: MainPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const mainPage = (): JSX.Element => <MainPage />;
