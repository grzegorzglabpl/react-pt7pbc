import React from 'react';
import Pages from './pages';

const Routes = {
  '/': () => <Pages.StronaGlowna />,
  '/kontakt': () => <Pages.Kontakt />,
  '/aktualnosci': () => <Pages.Aktualnosci />
};

export default Routes;
