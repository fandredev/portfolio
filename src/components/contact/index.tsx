import { ArrowRight, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import './contact.css';
import CardContact from './card-contact';
import FormContact from './form-contact';
import Translator from '../../hooks/use-translator';

export default function Contact() {
  return (
    <section className="container section" id="contact">
      <h2 className="section__title">
        <Translator path="contact.title" />
      </h2>
      <span className="section__subtitle">
        <Translator path="contact.subtitle" />
      </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <CardContact
              example_label="55 (11) 97381-3705"
              title="Whatsapp"
              icon={<FaWhatsapp className="contact__card-icon" />}
            >
              <a
                href="https://api.whatsapp.com/send?phone=11973813705&text=Olá%20Felipe%20André,%20gostaria%20de%20falar%20com%20você."
                className="contact__button"
                target="_blank"
              >
                <Translator path="contact.send_message" /> <ArrowRight />
              </a>
            </CardContact>

            <CardContact
              example_label="/devfandre"
              title="Linkedin"
              icon={
                <Linkedin strokeWidth={1.5} className="contact__card-icon" />
              }
            >
              <a
                href="https://www.linkedin.com/in/devfandre/"
                className="contact__button"
                target="_blank"
              >
                <Translator path="contact.send_message" /> <ArrowRight />
              </a>
            </CardContact>
          </div>
        </div>
        <div className="contact__content">
          <FormContact />
        </div>
      </div>
    </section>
  );
}
