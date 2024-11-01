import { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { ContactSchema, formContactSchema } from "./schemas/contact-schema";
import Translator from "../../hooks/use-translator";

const serviceId = import.meta.env.VITE_SERVICE_EMAIL_ID;
const templateId = import.meta.env.VITE_TEMPLATE_EMAIL_ID;
const apiPublicKeyEmail = import.meta.env.VITE_EMAIL_API_KEY;

const today = new Date().toLocaleDateString();

export default function FormContact() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loadingForm, setLoadingForm] = useState(false);
  const [blockUserResendEmailToday, setBlockUserResendEmailToday] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<ContactSchema>({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      message: "",
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
        toast.success(t("contact.form.messages.success_send_email"));

        localStorage.setItem("lastSentDate", today);
        setBlockUserResendEmailToday(true);
      })
      .catch(() => {
        toast.error(t("contact.form.messages.error_send_email"));
      })
      .finally(() => {
        reset();
        setLoadingForm(false);
      });
  }

  useEffect(() => {
    const lastSentDate = localStorage.getItem("lastSentDate");
    if (lastSentDate === today) setBlockUserResendEmailToday(true);
  }, []);

  return (
    <>
      <h3 className="contact__title">
        {blockUserResendEmailToday ? (
          <Translator path="contact.form.messages.thank_you_for_contacting_me" />
        ) : (
          <Translator path="contact.send_email" />
        )}
      </h3>
      {blockUserResendEmailToday ? (
        <div className="contact__form">
          <p className="contact__form-message-email-sended">
            <Translator path="contact.form.messages.block_resend_email" />
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact__form"
          ref={formRef}
        >
          <div className="container__form-div">
            <input
              aria-invalid={errors.name ? "true" : "false"}
              type="text"
              className="contact__form-input"
              placeholder={t("contact.form.fill_name")}
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="container__form-div">
            <input
              type="email"
              className="contact__form-input"
              placeholder={t("contact.form.fill_email")}
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </div>
          <div className="container__form-div">
            <textarea
              cols={10}
              rows={5}
              className="contact__form-input"
              placeholder={t("contact.form.fill_message")}
              {...register("message", {
                required: true,
              })}
              aria-invalid={errors.message ? "true" : "false"}
            />
          </div>

          <button
            className="button send-message-button"
            disabled={!isDirty || !isValid}
          >
            {loadingForm ? (
              <Translator path="home.loading" />
            ) : (
              <Translator path="contact.send" />
            )}
          </button>
        </form>
      )}
    </>
  );
}
