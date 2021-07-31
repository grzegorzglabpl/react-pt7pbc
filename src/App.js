import React from 'react';
import './style.css';

const Header = () => {
  return <header>Naglowek</header>;
};

const Nav = () => {
  return <nav>Nawigacja</nav>;
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
    <div contentEditable="true">
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}
