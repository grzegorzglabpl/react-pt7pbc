import { useReducer } from 'react';

const initialState = {
  nazwisko: 'Kowalski',
  imie: 'Jan',
  telefon: '',
  adresEmail: '',
  adresStronyWWW: '',
  zgodaRodo: true,
  zgodaNewsletter: false,
  zgodaOferta: true,
  informacjeDodatkowe: '',
  clickSubmit: false
};

const actions = {
  CLICK_SUBMIT: 'CLICK_SUBMIT',
  CLICK_RESET: 'CLICK_RESET',
  CHANGE_NAZWISKO: 'CHANGE_NAZWISKO',
  CHANGE_IMIE: 'CHANGE_IMIE',
  CHANGE_TELEFON: 'CHANGE_TELEFON',
  CHANGE_ADRES_EMAIL: 'CHANGE_ADRES_EMAIL',
  CHANGE_ADRES_STRONY_WWW: 'CHANGE_ADRES_STRONY_WWW',
  CHANGE_ZGODA_RODO: 'CHANGE_ZGODA_RODO',
  CHANGE_ZGODA_NEWSLETTER: 'CHANGE_ZGODA_NEWSLETTER',
  CHANGE_ZGODA_OFERTA: 'CHANGE_ZGODA_OFERTA',
  CHANGE_INFORMACJE_DODATKOWE: 'CHANGE_INFORMACJE_DODATKOWE'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CLICK_SUBMIT:
      return {
        ...state,
        clickSubmit: true
      };

    case action.CLICK_RESET: {
      return {
        ...state
      };
    }
    case action.CHANGE_NAZWISKO: {
      const nazwisko = action.payload.value;
      return {
        ...state,
        nazwisko: nazwisko
      };
    }

    case action.CHANGE_IMIE: {
      const imie = action.payload.value;

      return {
        ...state,
        imie: imie
      };
    }

    case action.CHANGE_TELEFON: {
      const telefon = action.payload.value;

      return {
        ...state,
        telefon: telefon
      };
    }

    case action.CHANGE_ADRES_EMAIL: {
      const adresEmail = action.payload.value;

      return {
        ...state,
        adresEmail: adresEmail
      };
    }

    case action.CHANGE_ADRES_STRONY_WWW: {
      const adresStronyWWW = action.payload.value;

      return {
        ...state,
        adresStronyWWW: adresStronyWWW
      };
    }

    case action.CHANGE_ZGODA_RODO: {
      const zgodaRodo = action.payload.checked;

      return {
        ...state,
        zgodaRodo: zgodaRodo
      };
    }

    case action.CHANGE_ZGODA_NEWSLETTER: {
      const zgodaNewsletter = action.payload.checked;

      return {
        ...state,
        zgodaNewsletter: zgodaNewsletter
      };
    }

    case action.CHANGE_ZGODA_OFERTA: {
      const zgodaOferta = action.payload.checked;

      return {
        ...state,
        zgodaOferta: zgodaOferta
      };
    }

    case action.CHANGE_INFORMACJE_DODATKOWE: {
      const informacjeDodatkowe = action.payload.value;

      return {
        ...state,
        informacjeDodatkowe: informacjeDodatkowe
      };
    }
    /*
    default:
      throw new Error(
        'useFormularzKontaktowy reducer error - action not supported.'
      );*/
  }
};

export const useFormularzKontaktowy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickSubmit = event => {
    event.preventDefault();
    dispatch({ type: actions.CLICK_SUBMIT, payload: event.target });
  };

  const onClickReset = event => {
    event.preventDefault();

    dispatch({ type: actions.CLICK_RESET, payload: event.target });
  };

  const onChangeNazwisko = event => {
    dispatch({ type: actions.CHANGE_NAZWISKO, payload: event.target });
  };

  const onChangeImie = event => {
    dispatch({ type: actions.CHANGE_IMIE, payload: event.target });
  };

  const onChangeTelefon = event => {
    dispatch({ type: actions.CHANGE_TELEFON, payload: event.target });
  };

  const onChangeAdresEmail = event => {
    dispatch({ type: actions.CHANGE_ADRES_EMAIL, payload: event.target });
  };

  const onChangeAdresStronyWWW = event => {
    dispatch({ type: actions.CHANGE_ADRES_STRONY_WWW, payload: event.target });
  };

  const onChangeZgodaRodo = event => {
    dispatch({ type: actions.CHANGE_ZGODA_RODO, payload: event.target });
  };

  const onChangeZgodaNewsletter = event => {
    dispatch({ type: actions.CHANGE_ZGODA_NEWSLETTER, payload: event.target });
  };

  const onChangeZgodaOferta = event => {
    dispatch({ type: actions.CHANGE_ZGODA_OFERTA, payload: event.target });
  };

  const onChangeInformacjeDodatkowe = event => {
    dispatch({
      type: actions.CHANGE_INFORMACJE_DODATKOWE,
      payload: event.target
    });
  };

  return {
    ...state,
    onClickSubmit,
    onClickReset,
    onChangeNazwisko,
    onChangeImie,
    onChangeTelefon,
    onChangeAdresEmail,
    onChangeAdresStronyWWW,
    onChangeZgodaRodo,
    onChangeZgodaNewsletter,
    onChangeZgodaOferta,
    onChangeInformacjeDodatkowe
  };
};

export default useFormularzKontaktowy;
