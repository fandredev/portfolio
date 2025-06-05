import React, { Suspense, useEffect } from "react";

import type { Preview } from "@storybook/react-vite";
import { I18nextProvider } from "react-i18next";

import NameContext from "../src/context/NameContext";
import i18n from "../src/services/i18n";

import "../src/index.css";

// https://storybook.js.org/recipes/react-i18next

const useWithI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "pt-BR", title: "Brazilian Portuguese" },
        { value: "en-US", title: "English" },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f5f5f5" },
        { name: "dark", value: "#333" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactContext: {
      contexts: [
        {
          context: NameContext,
          contextValue: {
            name: "Felipe André",
          },
        },
      ],
    },
  },

  decorators: [
    useWithI18next,
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],

  tags: ["autodocs"],
};

export default preview;
