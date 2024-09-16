import { ReactNode } from 'react';

interface CardContactProps {
  title: string;
  example_label: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function CardContact({
  title,
  icon,
  example_label,
  children,
}: CardContactProps) {
  return (
    <div className="contact__card">
      {icon}

      <h3 className="contact__card-title">{title}</h3>
      <span className="contact__card-data">{example_label}</span>

      {children}
    </div>
  );
}
