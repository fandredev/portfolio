import { useTranslation } from 'react-i18next';
import Translator from '../../hooks/use-translator';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { ContactSchema, formContactSchema } from './schemas/contact-schema';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const serviceId = import.meta.env.VITE_SERVICE_EMAIL_ID;
const templateId = import.meta.env.VITE_TEMPLATE_EMAIL_ID;
const apiPublicKeyEmail = import.meta.env.VITE_EMAIL_API_KEY;

export default function FormContact() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loadingForm, setLoadingForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<ContactSchema>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(formContactSchema),
  });

  function onSubmit() {
    const formContact = formRef.current as HTMLFormElement;
    setLoadingForm(true);

    emailjs
      .sendForm(serviceId, templateId, formContact, {
        publicKey: apiPublicKeyEmail,
      })
      .then(() => {
        toast.success(t('contact.form.messages.success_send_email'));
      })
      .catch(() => {
        toast.error(t('contact.form.messages.error_send_email'));
      })
      .finally(() => {
        reset();
        setLoadingForm(false);
      });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="contact__form"
      ref={formRef}
    >
      <div className="container__form-div">
        <input
          aria-invalid={errors.name ? 'true' : 'false'}
          type="text"
          className="contact__form-input"
          placeholder={t('contact.form.fill_name')}
          {...register('name', {
            required: true,
          })}
        />
      </div>
      <div className="container__form-div">
        <input
          type="email"
          className="contact__form-input"
          placeholder={t('contact.form.fill_email')}
          {...register('email', { required: true })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
      </div>
      <div className="container__form-div">
        <textarea
          cols={10}
          rows={5}
          className="contact__form-input"
          placeholder={t('contact.form.fill_message')}
          {...register('message', {
            required: true,
          })}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
      </div>

      <button
        className="button send-message-button"
        disabled={!isDirty || !isValid}
      >
        {loadingForm ? (
          <Translator path="home.loading" />
        ) : (
          <>
            <Translator path="contact.send" />
            <ArrowRight size={24} />
          </>
        )}
      </button>
    </form>
  );
}
