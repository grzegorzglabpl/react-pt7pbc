import React, { useState } from 'react';
import hooks from '../hooks';

import './FormularzRejestracji.css';

const FormularzRejestracji = () => {
  const useFormularzRejestracji = hooks.useFormularzRejestracji();

  const [nazwisko, setNazwisko] = useState('Kowalski');
  const [imie, setImie] = useState('Jan');

  const [telefon, setTelefon] = useState('');
  const [adresEmail, setAdresEmail] = useState('');
  const [adresStronyWWW, setAdresStronyWWW] = useState('');

  const [zgodaRodo, setZgodaRodo] = useState(true);
  const [zgodaNewsletter, setZgodaNewsletter] = useState(false);
  const [zgodaOferta, setZgodaOferta] = useState(true);
  const [informacjeDodatkowe, setInformacjeDodatkowe] = useState('');

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
          value={useFormularzRejestracji.nazwisko}
          onChange={e => setNazwisko(e.target.value)}
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
          value={useFormularzRejestracji.imie}
          onChange={e => setImie(e.target.value)}
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
          value={useFormularzRejestracji.telefon}
          required
          minlength="9"
          maxlength="9"
          pattern="^\d{9}$"
          placeholder="Podaj numer telefonu w formacie: 123456789"
          onChange={e => setTelefon(e.target.value)}
        />
        <label for="email">Podaj adres email:</label>
        <input
          id="email"
          type="email"
          name="adresEmail"
          value={useFormularzRejestracji.adresEmail}
          required
          placeholder="Podaj adres email"
          onChange={e => setAdresEmail(e.target.value)}
        />
        <label for="stronaWWW">Adres strony WWW:</label>
        <input
          id="stronaWWW"
          name="stronaWWW"
          value={useFormularzRejestracji.adresStronyWWW}
          type="url"
          placeholder="Poda adres strony www"
          onChange={e => setAdresStronyWWW(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <legend>Zgody:</legend>
        <fieldset>
          <legend>Zgoda RODO:</legend>
          <label for="zgodaRodoTak">TAK</label>
          <input
            id="zgodaRodoTak"
            type="radio"
            name="zgodaRodo"
            required
            checked={useFormularzRejestracji.zgodaRodo}
            value="tak"
            onChange={e => setZgodaRodo(true)}
          />
          <label for="zgodaRodoTak">NIE</label>
          <input
            id="zgodaRodoNie"
            type="radio"
            name="zgodaRodo"
            value="nie"
            checked={!useFormularzRejestracji.zgodaRodo}
            onChange={e => setZgodaRodo(false)}
          />
        </fieldset>
        <fieldset>
          <legend>Zgody Marketingowe:</legend>
          <label for="zgodaNewsletter">
            Zgoda na zapisanie do newslettera:
          </label>
          <input
            id="zgodaNewsletter"
            type="checkbox"
            name="zgodaNewsletter"
            value="tak"
            checked={useFormularzRejestracji.zgodaNewsletter}
            onChange={e => setZgodaNewsletter(e.target.checked)}
          />
          <label for="zgodaOferta">Zgoda na przesyłanie oferty</label>
          <input
            id="zgodaOferta"
            type="checkbox"
            name="zgodaOferta"
            value="tak"
            checked={useFormularzRejestracji.zgodaOferta}
            onChange={e => setZgodaOferta(e.target.checked)}
          />
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
          value={useFormularzRejestracji.informacjeDodatkowe}
          onChange={e => setInformacjeDodatkowe(e.target.value)}
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
