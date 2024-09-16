import { Languages } from '.';

interface ImageLanguageProps {
  image: string;
  isSelected: boolean;
  onChangeLanguage: (language: Languages) => void;
  altText: string;
}

export default function ImageLanguage({
  image,
  isSelected,
  onChangeLanguage,
  altText,
  ...props
}: ImageLanguageProps) {
  return (
    <button
      onClick={() => onChangeLanguage(isSelected ? 'pt-BR' : 'en-US')}
      className={`flag-container ${isSelected ? 'selected' : ''}`}
      aria-label={altText}
      {...props}
    >
      <img alt={altText} src={image} className="flag-image" />
    </button>
  );
}
