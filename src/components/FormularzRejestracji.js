import React from 'react';

const FormularzRejestracji = () => {
  return (
    <form method="post">
      <h2>Formularz Rejestracji:</h2>
      <fieldset>
        <legend>Dane Personalne:</legend>
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
