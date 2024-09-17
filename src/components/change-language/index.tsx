import { useTranslation } from 'react-i18next';
import ImageLanguage from './image-language';
import FlagBrazil from '../../assets/flags/flag-brazil.png';
import FlagEUA from '../../assets/flags/flag-eua.png';

import './image-language.css';

export type Languages = 'pt-BR' | 'en-US';

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
        isSelected={selectedLanguage === 'pt-BR'}
        onChangeLanguage={() => handleChangeLanguage('pt-BR')}
        altText={t('alt_image.flag_brazil')}
      />
      <ImageLanguage
        image={FlagEUA}
        isSelected={selectedLanguage === 'en-US'}
        onChangeLanguage={() => handleChangeLanguage('en-US')}
        altText={t('alt_image.flag_united_states')}
      />
    </>
  );
}
