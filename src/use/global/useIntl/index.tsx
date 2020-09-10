import { useCallback, useState } from 'react';
import { MessageFormatElement } from 'intl-messageformat-parser';

import storage from 'util/Storage';
import { translationsEN, translationsES } from './langs';

// eslint-disable-next-line no-shadow
export enum LangEnum {
  ES= 'ES',
  EN= 'EN',
}

interface LangFormat {
  lang: LangEnum;
  messages: any;
}

const getLang = (localLanguage: string): LangFormat => {
  const defaultValue = {
    lang: LangEnum.EN,
    messages: translationsEN,
  };
  switch (localLanguage) {
    case LangEnum.ES: return {
      lang: LangEnum.ES,
      messages: translationsES,
    };
    case LangEnum.EN: return defaultValue;
    default: return defaultValue;
  }
};

const getLocalLanguage = (): LangFormat => {
  const lang = storage.getLangID();
  if (lang) { return getLang(lang); }
  const browserLang = navigator.language.split(/[_-]/)[0];
  return getLang(browserLang);
};

export interface UseIntlFormat {
  lang: string;
  messages: Record<string, string> | Record<string, MessageFormatElement[]>;
  defaultLocale: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLang: (lang: LangEnum) => void;
}

export default function useIntl(): UseIntlFormat {
  const lang = getLocalLanguage();
  const defaultState = {
    defaultLocale: LangEnum.ES,
    ...lang,
  };
  const [intl, setIntl] = useState(defaultState);

  const setLang = useCallback((newLang: LangEnum) => {
    storage.setLangID(newLang);
    const localLang = getLang(newLang);
    setIntl((state) => ({
      ...state,
      ...localLang,
    }));
  }, []);

  return {
    setLang,
    ...intl,
  };
}
