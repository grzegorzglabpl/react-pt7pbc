import React from 'react';
import Components from '../components';
import './StronaGlowna.css';

const StronaGlowna = () => {
  const { Aside, Footer, Header, Main, Nav } = Components;

  return (
    <section className="StronaGlowna">
      <h1>Strona Główna</h1>
      <h2>Podstrona 1</h2>
      <h3>Podstrona 2</h3>
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </section>
  );
};
export default StronaGlowna;
