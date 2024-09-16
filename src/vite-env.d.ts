/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_EMAIL_ID: string;
  readonly VITE_TEMPLATE_EMAIL_ID: string;
  readonly VITE_EMAIL_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
