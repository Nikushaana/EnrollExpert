import { createContext, useState } from "react";
import enTranslations from "../languagesfiles/enTranslation";
import arTranslations from "../languagesfiles/arTranslation";

export const MainLang = createContext();

export const MainLangCont = ({ children }) => {
  const [lang, setLang] = useState("English");

  const translations = (lang === "Arabic") ? arTranslations : enTranslations;

  const handlesetlang = () => {
    if (lang === "English") {
      setLang("Arabic");
    } else if (lang === "Arabic") {
      setLang("English");
    }
  };



  return (
    <MainLang.Provider value={{ handlesetlang, translations, lang }}>
      {children}
    </MainLang.Provider>
  );
};
