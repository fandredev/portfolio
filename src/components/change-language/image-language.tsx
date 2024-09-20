import { Languages } from ".";

interface ImageLanguageProps {
  image: string;
  isSelected: boolean;
  onChangeLanguage: (language: Languages) => void;
  altText: string;
}

export enum LanguageTypes {
  ptBR = "pt-BR",
  enUS = "en-US",
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
      onClick={() =>
        onChangeLanguage(isSelected ? LanguageTypes.ptBR : LanguageTypes.enUS)
      }
      className={`flag-container ${isSelected ? "selected" : ""}`}
      aria-label={altText}
      {...props}
    >
      <img
        alt={altText}
        src={image}
        className="flag-image"
        width={600}
        height={600}
      />
    </button>
  );
}
