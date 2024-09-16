import { useTranslation } from 'react-i18next';
import FlagBrazil from '../../assets/flag-brazil.png';
import FlagEUA from '../../assets/flag-eua.png';
import ImageLanguage from './image-language';

import './image-language.css';

export type Languages = 'pt-BR' | 'en-US';

export default function I18n() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: Languages) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language;

  return (
    <>
      <ImageLanguage
        image={FlagBrazil}
        isSelected={selectedLanguage === 'pt-BR'}
        onChangeLanguage={() => handleChangeLanguage('pt-BR')}
        altText="Brazil Flag"
      />
      <ImageLanguage
        image={FlagEUA}
        isSelected={selectedLanguage === 'en-US'}
        onChangeLanguage={() => handleChangeLanguage('en-US')}
        altText="USA Flag"
      />
    </>
  );
}
