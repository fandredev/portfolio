/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SERVICE_EMAIL_ID: string;
  readonly VITE_TEMPLATE_EMAIL_ID: string;
  readonly VITE_EMAIL_API_KEY: string;
  readonly VITE_API_URL_PORTFOLIO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
