import React, { useState } from 'react';
import hooks from '../hooks';

import './FormularzRejestracji.css';

const FormularzRejestracji = () => {
  const useFormularzRejestracji = hooks.useFormularzRejestracji();

  return !useFormularzRejestracji.clickSubmit ? (
    <form
      action=""
      id="formularzRejestracji"
      method="get"
      onSubmit={useFormularzRejestracji.onClickSubmit}
      onReset={useFormularzRejestracji.onClickReset}
    >
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
          onChange={useFormularzRejestracji.onChangeNazwisko}
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
          onChange={useFormularzRejestracji.onChangeImie}
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
          onChange={useFormularzRejestracji.onChangeTelefon}
        />
        <label for="email">Podaj adres email:</label>
        <input
          id="email"
          type="email"
          name="adresEmail"
          value={useFormularzRejestracji.adresEmail}
          required
          placeholder="Podaj adres email"
          onChange={useFormularzRejestracji.onChangeAdresEmail}
        />
        <label for="stronaWWW">Adres strony WWW:</label>
        <input
          id="stronaWWW"
          name="stronaWWW"
          value={useFormularzRejestracji.adresStronyWWW}
          type="url"
          placeholder="Poda adres strony www"
          onChange={useFormularzRejestracji.onChangeAdresStronyWWW}
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
            onChange={useFormularzRejestracji.onChangeZgodaRodo}
          />
          <label for="zgodaRodoTak">NIE</label>
          <input
            id="zgodaRodoNie"
            type="radio"
            name="zgodaRodo"
            value="nie"
            checked={!useFormularzRejestracji.zgodaRodo}
            onChange={useFormularzRejestracji.onChangeZgodaRodo}
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
            onChange={useFormularzRejestracji.onChangeZgodaNewsletter}
          />
          <label for="zgodaOferta">Zgoda na przesyłanie oferty</label>
          <input
            id="zgodaOferta"
            type="checkbox"
            name="zgodaOferta"
            value="tak"
            checked={useFormularzRejestracji.zgodaOferta}
            onChange={useFormularzRejestracji.onChangeZgodaOferta}
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
          onChange={useFormularzRejestracji.onChangeInformacjeDodatkowe}
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
  ) : (
    <section>Dziękujęmy za wypełnienie formularza rejestracji.</section>
  );
};
export default FormularzRejestracji;
