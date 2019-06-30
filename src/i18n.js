import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./assets/lang/en";
import { fr } from "./assets/lang/fr";

// the translations
const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  },

};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "fr",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;