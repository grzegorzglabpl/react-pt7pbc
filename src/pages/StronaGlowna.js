import React from 'react';
import Components from '../components';

const StronaGlowna = () => {
  const { Aside, Footer, Header, Main, Nav } = Components;

  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </>
  );
};
export default StronaGlowna;
