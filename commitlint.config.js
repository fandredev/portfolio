export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Type: deve ser um dos tipos especificados
    "type-enum": [
      2,
      "always",
      [
        "feat", // Nova funcionalidade
        "fix", // Correção de bug
        "docs", // Alterações na documentação
        "style", // Formatação, ponto e vírgula faltando, etc
        "refactor", // Refatoração de código
        "perf", // Melhorias de performance
        "test", // Adição ou correção de testes
        "build", // Mudanças no sistema de build ou dependências
        "ci", // Mudanças nos arquivos de CI
        "chore", // Outras mudanças que não modificam src ou test
        "revert", // Reverte um commit anterior
      ],
    ],
    // Type obrigatório
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],

    // Subject (descrição)
    "subject-empty": [2, "never"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-full-stop": [2, "never", "."],
    "subject-max-length": [2, "always", 72],

    // Header (type + scope + subject)
    "header-max-length": [2, "always", 100],

    // Body
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [2, "always", 100],

    // Footer
    "footer-leading-blank": [2, "always"],
    "footer-max-line-length": [2, "always", 100],
  },
};
