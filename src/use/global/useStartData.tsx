import { useCallback, useEffect, useState } from 'react';

import { StatusFormat, ErrorFormat } from 'util/dataFormat/globalStateFormat';
import { LangFormat } from 'data/lang/lang/type';

export interface StartDataFormat {
  errors: ErrorFormat[];
  getData: () => void;
  loaded: boolean;
  submit: boolean;

  langs: LangFormat[];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLang: (lang: string) => void;
  lang: string;
}

/**
 * To define if the data is being sumbited.
 * If there are a request not loaded, the status is false.
 * All request must be loaded.
 */
const getStateStatus = (status: StatusFormat[], key: keyof StatusFormat): boolean => {
  // eslint-disable-next-line no-restricted-syntax
  for (const state of status) {
    if (!state[key]) {
      return false;
    }
  }
  return true;
};

export default function useStartData(): StartDataFormat {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorFormat[]>([]);

  // App doesn't works whitout this data
  const langs: LangFormat[] = [
    {
      langID: 'ES',
      name: 'Spanish',
      localName: 'Espa\u00F1ol',
      active: true,
      isBlocked: false,
    },
    {
      langID: 'EN',
      name: 'English',
      localName: 'English',
      active: true,
      isBlocked: false,
    },
  ];

  // The default lang for the webpage is English
  const [lang, setLang] = useState<string>('EN');
  /**
   * Add here every data that must to be loaded to make admin works
   */
  const getData = useCallback(async () => {}, []);

  /**
   * To define if an request has errors
   */
  const loadErrors = useCallback(() => {
    const status: StatusFormat[] = [];
    let newErrors: ErrorFormat[] = [];
    status.forEach((state) => {
      if (state.error?.errors) {
        newErrors = [...newErrors, ...state.error.errors];
      }
    });
    if (newErrors.length > 0) { setErrors(newErrors); }
  }, []);

  /**
   * Update admin status if some hooks change
   */
  useEffect(() => {
    const status: StatusFormat[] = [];
    setSubmit(getStateStatus(status, 'submit'));
    setLoaded(getStateStatus(status, 'loaded'));
    loadErrors();
  }, [loadErrors]);

  return {
    errors,
    getData,
    loaded,
    submit,

    // Status object
    langs,
    lang,
    setLang,
  };
}
