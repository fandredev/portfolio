import { useTranslation } from 'react-i18next';
import Translator from '../../hooks/use-translator';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { ContactSchema, formContactSchema } from './schemas/contact-schema';

export default function FormContact() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isDirty, isValid },
    reset,
  } = useForm<ContactSchema>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: zodResolver(formContactSchema),
  });

  function onSubmit(data: ContactSchema) {
    console.log(data);

    if (isSubmitSuccessful) reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
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

      <button
        className="button send-message-button"
        disabled={!isDirty || !isValid}
      >
        <Translator path="contact.send" /> <ArrowRight />
      </button>
    </form>
  );
}
