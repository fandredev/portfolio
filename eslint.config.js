import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist', 'coverage'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      "import/no-restricted-paths": [
        "warn",
        {
          zones: [
            {
              target: "./src",
              from: "./src",
              except: [
                "src/*",
                "assets/*",
                "components/*",
                "context/*",
                "hooks/*",
                "i18n/*",
                "pages/*",
                "providers/*",
                "routes/*",
                "services/*"
              ],
              message:
                "Evite usar caminhos relativos longos. Use os aliases definidos no tsconfig.json e vite.config.ts.",
            },
          ],
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  }
);
