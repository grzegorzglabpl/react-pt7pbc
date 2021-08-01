import React from 'react';
import './FormularzRejestracji.css';

const FormularzRejestracji = () => {
  return (
    <form action="" id="formularzRejestracji" method="get">
      <input
        type="hidden"
        name="nazwaFormularza"
        value="formularzRejestracji"
      />
      <h2>Formularz Rejestracji:</h2>

      <fieldset id="DanePersonalne">
        <legend>Dane Personalne:</legend>
        <label for="nazwisko">Podaj Nazwisko:</label>
        <input
          id="nazwisko"
          name="nazwisko"
          type="text"
          required
          placeholder="Podaj Nazwisko"
          title="Proszę podać Nazwisko"
          minlength="3"
          maxlength="20"
        />
        <p class="walidator">Niepoprawna wartość.</p>
        <label for="imie">Podaj Imię:</label>
        <input
          id="imie"
          name="imie"
          type="text"
          required
          placeholder="Podaj Imię"
          title="Proszę podać imię"
          minlength="3"
          maxlength="20"
        />
        <p class="walidator">Niepoprawna wartość.</p>
      </fieldset>

      <fieldset>
        <legend>Dane Kontaktowe:</legend>
        <label for="telefon">Podaj numer telefonu:</label>
        <input
          id="telefon"
          name="telefon"
          type="text"
          required
          minlength="9"
          maxlength="9"
          pattern="^\d{9}$"
          placeholder="Podaj numer telefonu w formacie: 123456789"
        />
        <label for="email">Podaj adres email:</label>
        <input
          id="email"
          type="email"
          required
          placeholder="Podaj adres email"
        />
        <label for="stronaWWW">Adres strony WWW:</label>
        <input
          id="stronaWWW"
          name="stronaWWW"
          type="url"
          placeholder="Poda adres strony www"
        />
      </fieldset>
      <fieldset>
        <legend>Zgody:</legend>
        <fieldset>
          <legend>Zgoda RODO:</legend>
          <label for="zgodaRodoTak">TAK</label>
          <input id="zgodaRodoTak" type="radio" name="zgodaRodo" />
          <label for="zgodaRodoTak">NIE</label>
          <input id="zgodaRodoNie" type="radio" name="zgodaRodo" checked />
        </fieldset>
        <fieldset>
          <legend>Zgody Marketingowe:</legend>
          <label for="zgodaNewsletter">
            Zgoda na zapisanie do newslettera:
          </label>
          <input id="zgodaNewsletter" type="checkbox" name="zgodaNewsletter" />
          <label for="zgodaOferta">Zgoda na przesyłanie oferty</label>
          <input id="zgodaOferta" type="checkbox" name="zgodaOferta" checked />
        </fieldset>
      </fieldset>
      <fieldset>
        <legend>Informacje Dodatkowe:</legend>
        <label for="informacjeDodatkowe">
          Proszę wypełnić w przypadku potrzeby przesłania informacji dodatkowych
        </label>
        <textarea
          id="informacjeDodatkowe"
          name="informacjeDodatkowe"
          placeholder="Proszę podać informacje dodatkowe"
          title="Proszę podać informację dodatkowe"
        />
      </fieldset>
      <nav>
        <button title="Zarejestruj się w systemie" type="submit">
          &rarr; Rejestracja
        </button>
        <input type="submit" value="Rejestracja" />
        <button type="reset">Wyczyść Formularz</button>
        <input type="reset" value="Wyczyść Formularz" />
      </nav>
    </form>
  );
};
export default FormularzRejestracji;
