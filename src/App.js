import React from 'react';
import Pages from './pages';
import Componets from './components';

import './style.css';

export default function App() {
  const { StronaGlowna, Kontakt } = Pages;
  const { Aside, Footer, Header, Main, Nav } = Componets;
  return (
    <>
      <Header imie="Jan" nazwisko="Twardowski" />
      <Nav naglowek="Sekcja Nawigacji" aktywnaStrona="1" />
      <Main />
      <StronaGlowna />
      <Kontakt />
      <Aside />
      <Footer />
    </>
  );
}
