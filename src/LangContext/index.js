import { createContext, useState } from "react";
import { LOCALE } from "../i18n";

export const Lang = createContext({
  lang: LOCALE.ENGLISH,
  changeLang: () => {}
});

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState(LOCALE.ENGLISH);

  const changeLang = (param) => {
    setLang(param);
  };

  const value = {
    lang,
    changeLang
  };

  return (
    <>
      <Lang.Provider value={value}>{children}</Lang.Provider>
    </>
  );
};
