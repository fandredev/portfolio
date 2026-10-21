import emailjs from "@emailjs/browser";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach, vi } from "vitest";

import i18n from "services/i18n";

import FormContact from "./form-contact";

vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn() },
}));

vi.mock("react-toastify", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

function renderForm() {
  render(
    <I18nextProvider i18n={i18n}>
      <FormContact />
    </I18nextProvider>,
  );
}

async function fillForm(email = "felipe@example.com") {
  const user = userEvent.setup();
  const [name, emailInput, message] = [
    screen.getByPlaceholderText(i18n.t("contact.form.fill_name")),
    screen.getByPlaceholderText(i18n.t("contact.form.fill_email")),
    screen.getByPlaceholderText(i18n.t("contact.form.fill_message")),
  ];

  await user.type(name, "Felipe");
  await user.type(emailInput, email);
  await user.type(message, "Olá!");

  return user;
}

describe(`${FormContact.name} component`, () => {
  beforeEach(() => {
    localStorage.clear();
    vi.mocked(emailjs.send).mockReset();
  });

  test("keeps the submit button disabled while the form is pristine", () => {
    renderForm();

    expect(screen.getByRole<HTMLButtonElement>("button").disabled).toBe(true);
  });

  test("keeps the submit button disabled for an invalid email", async () => {
    renderForm();
    await fillForm("not-an-email");

    expect(screen.getByRole<HTMLButtonElement>("button").disabled).toBe(true);
  });

  test("sends the email and blocks a second send on the same day", async () => {
    vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: "OK" });
    renderForm();
    const user = await fillForm();

    await user.click(screen.getByRole("button"));

    await waitFor(() => expect(emailjs.send).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.queryByRole("button")).toBeNull());
    expect(localStorage.getItem("lastSentDate")).not.toBeNull();
  });

  test("keeps the form available when sending fails", async () => {
    vi.mocked(emailjs.send).mockRejectedValue(new Error("fail"));
    renderForm();
    const user = await fillForm();

    await user.click(screen.getByRole("button"));

    await waitFor(() => expect(emailjs.send).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(screen.getByRole<HTMLButtonElement>("button").disabled).toBe(true),
    );
    expect(localStorage.getItem("lastSentDate")).toBeNull();
  });
});
