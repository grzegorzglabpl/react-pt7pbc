import React from 'react';
import Pages from './pages';
import './style.css';

export default function App() {
  const { StronaGlowna, Kontakt } = Pages;

  return (
    <>
      <StronaGlowna />
      <Kontakt />
    </>
  );
}
