import React from 'react';
import './FormularzRejestracji.css';

const FormularzRejestracji = () => {
  return (
    <form id="formularzRejestracji" method="post">
      <h2>Formularz Rejestracji:</h2>
      <fieldset id="DanePersonalne">
        <legend>Dane Personalne:</legend>
        <label for="nazwisko">Podaj Nazwisko:</label>
        <input id="nazwisko" name="nazwisko" type="text" value="" />
        <label for="imie">Podaj Imię:</label>
        <input id="imie" name="imie" type="text" value="" />
      </fieldset>
      <fieldset>
        <legend>Dane Kontaktowe:</legend>
      </fieldset>
      <fieldset>
        <legend>Zgody:</legend>
      </fieldset>
      <nav>
        <button type="submit">Rejestracja</button>
        <input type="submit" value="Rejestracja" />
        <button type="reset">Wyczyść Formularz</button>
        <input type="reset" value="Wyczyść Formularz" />
      </nav>
    </form>
  );
};
export default FormularzRejestracji;
