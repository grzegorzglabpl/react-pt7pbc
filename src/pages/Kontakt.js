import React from 'react';
import Components from '../components';

const Kontakt = () => {
  const { Header, Main, Nav, Footer, FormularzRejestracji } = Components;

  return (
    <>
      <h1>Strona Kontakt</h1>
      <Header />
      <FormularzRejestracji />
      <Nav />
      <Footer />
    </>
  );
};

export default Kontakt;
