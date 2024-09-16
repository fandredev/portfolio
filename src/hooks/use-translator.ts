import { useTranslation } from 'react-i18next';

interface TranslatorProps {
  path: string;
}

export default function Translator({ path }: TranslatorProps) {
  const { t } = useTranslation();
  return t(path);
}
