import React from 'react';
import LandingPage from './LandingPage';

export default {
  title: 'Page/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const landingPage = (): JSX.Element => <LandingPage />;
