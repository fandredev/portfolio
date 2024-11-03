import FlagBrazil from "assets/flags/flag-brazil.webp";
import FlagEUA from "assets/flags/flag-eua.webp";
import { useTranslation } from "react-i18next";

import ImageLanguage, { LanguageTypes } from "./image-language";

import "./image-language.css";

export type Languages = LanguageTypes.ptBR | LanguageTypes.enUS;

export default function I18n() {
  const { i18n, t } = useTranslation();

  function handleChangeLanguage(language: Languages) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language;

  return (
    <>
      <ImageLanguage
        image={FlagBrazil}
        isSelected={selectedLanguage === LanguageTypes.ptBR}
        onChangeLanguage={() => handleChangeLanguage(LanguageTypes.ptBR)}
        altText={t("alt_image.flag_brazil")}
      />
      <ImageLanguage
        image={FlagEUA}
        isSelected={selectedLanguage === LanguageTypes.enUS}
        onChangeLanguage={() => handleChangeLanguage(LanguageTypes.enUS)}
        altText={t("alt_image.flag_united_states")}
      />
    </>
  );
}
