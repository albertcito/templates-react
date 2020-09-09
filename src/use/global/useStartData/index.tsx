import { useCallback, useEffect, useState } from 'react';

import useLangs from 'data/lang/lang/use/useLangs';
import { StatusFormat, ErrorFormat } from 'util/dataFormat/globalStateFormat';
import { LangFormat } from 'data/lang/lang/type';
import { PaginationDataFormat } from 'util/api/util/serverDataFormat';

export interface StartDataFormat {
  errors: ErrorFormat[];
  getData: () => void;
  loaded: boolean;
  submit: boolean;

  langs?: PaginationDataFormat<LangFormat[]>;
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
  const {
    data: langs,
    getAll: getLangs,
    status: stateLangs,
  } = useLangs();

  // The default lang for the webpage is English
  const [lang, setLang] = useState<string>('EN');

  /**
   * Add here every data that must to be loaded to make admin works
   */
  const getData = useCallback(async () => {
    await getLangs();
  }, [getLangs]);

  /**
   * To define if an request has errors
   */
  const loadErrors = useCallback(() => {
    const status = [stateLangs];
    let newErrors: ErrorFormat[] = [];
    status.forEach((state) => {
      if (state.error?.errors) {
        newErrors = [...newErrors, ...state.error.errors];
      }
    });
    if (newErrors.length > 0) { setErrors(newErrors); }
  }, [stateLangs]);

  /**
   * Update admin status if some hooks change
   */
  useEffect(() => {
    const status = [stateLangs];
    setSubmit(getStateStatus(status, 'submit'));
    setLoaded(getStateStatus(status, 'loaded'));
    loadErrors();
  }, [loadErrors, stateLangs]);

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
