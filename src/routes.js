import React from 'react';
import Pages from './pages';

const { StronaGlowna, Kontakt } = Pages;

const Routes = {
  '/': () => <StronaGlowna />,
  '/kontakt': () => <Kontakt />
};

export default Routes;
