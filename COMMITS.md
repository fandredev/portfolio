# 📝 Guia de Commits (Commitlint)

Este projeto usa **Commitlint** para garantir que todas as mensagens de commit sigam o padrão [Conventional Commits](https://www.conventionalcommits.org/).

## 🎯 Por que usar Conventional Commits?

- ✅ **Histórico limpo e organizado**: Facilita a compreensão das mudanças
- ✅ **Geração automática de CHANGELOG**: Permite criar changelogs automaticamente
- ✅ **Versionamento semântico**: Facilita o gerenciamento de versões
- ✅ **Colaboração eficiente**: Todos seguem o mesmo padrão

## 📐 Formato das Mensagens

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Exemplo Completo:

```
feat(auth): add login with Google

Implementa autenticação OAuth2 com Google para permitir
login mais rápido dos usuários.

Closes #123
```

## 🏷️ Tipos de Commit Permitidos

| Tipo       | Descrição                      | Exemplo                           |
| ---------- | ------------------------------ | --------------------------------- |
| `feat`     | Nova funcionalidade            | `feat: add dark mode`             |
| `fix`      | Correção de bug                | `fix: resolve login error`        |
| `docs`     | Alterações na documentação     | `docs: update README`             |
| `style`    | Formatação (não afeta código)  | `style: format with prettier`     |
| `refactor` | Refatoração de código          | `refactor: simplify auth logic`   |
| `perf`     | Melhorias de performance       | `perf: optimize image loading`    |
| `test`     | Adição/correção de testes      | `test: add unit tests for auth`   |
| `build`    | Mudanças no build/dependências | `build: update vite to v6`        |
| `ci`       | Mudanças no CI/CD              | `ci: add GitHub Actions workflow` |
| `chore`    | Outras mudanças auxiliares     | `chore: update .gitignore`        |
| `revert`   | Reverter commit anterior       | `revert: feat: add dark mode`     |

## 📏 Regras Obrigatórias

1. **Type**: Obrigatório e em minúsculas
2. **Subject**:
   - Obrigatório
   - Máximo 72 caracteres
   - Não terminar com ponto (.)
   - Em minúsculas (kebab-case ou camelCase)
3. **Header**: Máximo 100 caracteres
4. **Body**: Linha em branco antes, máximo 100 caracteres por linha
5. **Footer**: Linha em branco antes, máximo 100 caracteres por linha

## ✅ Exemplos Válidos

```bash
# Simples
feat: add user profile page

# Com escopo
fix(login): resolve authentication timeout

# Com body
feat: add dark mode support

Implements theme toggle with localStorage persistence
and automatic system preference detection.

# Com footer
fix: resolve memory leak in component

Closes #456
```

## ❌ Exemplos Inválidos

```bash
# Sem type
add new feature

# Type em maiúsculas
FEAT: add new feature

# Subject com ponto final
feat: add new feature.

# Subject muito longo (> 72 caracteres)
feat: add a very very very very very very very very very long feature description

# Subject em maiúsculas
feat: Add New Feature
```

## 🧪 Testando Mensagens

Você pode testar se sua mensagem de commit está válida antes de commitar:

```bash
echo "feat: add new feature" | npx commitlint
```

## 🔧 Como Funciona

1. **Husky**: Gerencia os git hooks
2. **Commitlint**: Valida a mensagem do commit
3. **Hook commit-msg**: Executa automaticamente antes de cada commit

Quando você tentar fazer um commit, o Commitlint validará a mensagem automaticamente. Se a mensagem não seguir o padrão, o commit será rejeitado com uma mensagem de erro explicativa.

## 🛠️ Configuração

A configuração está em `commitlint.config.js`:

```javascript
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Regras customizadas para o projeto
  },
};
```

## 📚 Mais Informações

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint Documentation](https://commitlint.js.org/)
- [Commitlint Rules](https://commitlint.js.org/#/reference-rules)

## 🚀 Dicas

1. **Use imperativos**: "add" ao invés de "added" ou "adds"
2. **Seja conciso**: Mantenha o subject curto e direto
3. **Use o body**: Para explicações mais detalhadas
4. **Referencie issues**: Use `Closes #123` no footer
5. **Um commit = Uma mudança**: Mantenha commits atômicos
