import React from 'react';

const Header = ({ imie, nazwisko }) => {
  return (
    <header>
      Witaj {imie} {nazwisko} na naszej stronie
    </header>
  );
};
export default Header;
