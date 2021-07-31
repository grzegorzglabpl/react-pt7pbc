import React from 'react';
import './style.css';

const Header = ({ imie, nazwisko }) => {
  return (
    <header>
      Witaj {imie} {nazwisko} na naszej stronie
    </header>
  );
};

const Nav = props => {
  const { naglowek, aktywnaStrona } = props;

  const naglowek1 = naglowek + ' hello';

  return <nav>{naglowek1}</nav>;
};

const Main = () => {
  return <main>Main</main>;
};

const Aside = () => {
  return <aside>Aside</aside>;
};

const Footer = () => {
  return <footer>Footer</footer>;
};

export default function App() {
  return (
    <div>
      <Header imie="Jan" nazwisko="Twardowski" />
      <Nav naglowek="Sekcja Nawigacji" aktywnaStrona="1" />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}
