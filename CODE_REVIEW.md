# Code Review — Portfolio

Data: 2026-03-02

## Escopo analisado
- Arquitetura base (roteamento, providers e boundary de erros).
- Fluxo de contato (formulário + validação + envio com EmailJS).
- Consumo de dados de stats (React Query + Axios).
- Qualidade operacional observável (execução de lint/test no ambiente).

## Principais achados

### 1) Tratamento de erro com `console.log` em produção (média)
**Onde:** `src/services/error-boundary/error-logs.ts`

**Risco:**
- Logs pouco estruturados dificultam observabilidade.
- `console.log` para erro pode ser ignorado por pipelines de monitoramento e não diferencia severidade.

**Recomendação:**
- Trocar para `console.error` e padronizar payload (erro + `componentStack`).
- Integrar com ferramenta de monitoramento (Sentry, LogRocket, Datadog, etc.) no callback do `ErrorBoundary`.

---

### 2) Falta de validação explícita de variáveis de ambiente no envio de email (alta)
**Onde:** `src/components/contact/form-contact.tsx`

**Risco:**
- Se `VITE_SERVICE_EMAIL_ID`, `VITE_TEMPLATE_EMAIL_ID` ou `VITE_EMAIL_API_KEY` não estiverem definidos, o envio falha apenas em runtime.
- A falha fica tardia (usuário final) e o diagnóstico fica mais difícil.

**Recomendação:**
- Validar as variáveis na inicialização do app (ou no módulo do formulário) e falhar com mensagem clara para desenvolvimento.
- Em produção, exibir estado de indisponibilidade do formulário quando configuração estiver incompleta.

---

### 3) Estratégia de bloqueio de reenvio baseada em `localStorage` é frágil (média)
**Onde:** `src/components/contact/form-contact.tsx`

**Risco:**
- Pode ser burlada ao limpar storage/trocar dispositivo/navegador.
- Usa `toLocaleDateString()`, sujeito a variação de locale/timezone.

**Recomendação:**
- Mover limitação para backend/rate-limit por IP/token/identidade.
- No front, manter apenas UX auxiliar, armazenando timestamp UTC (`Date.now`) ao invés de string localizada.

---

### 4) Acoplamento de mensagens de validação em apenas um idioma (baixa)
**Onde:** `src/components/contact/schemas/contact-schema.ts`

**Risco:**
- Mensagem `'Por favor, insira um email válido'` está hardcoded em PT-BR.
- Pode divergir da linguagem atual escolhida no app com i18n.

**Recomendação:**
- Centralizar mensagens no i18n e/ou mapear erros do Zod para chaves de tradução.

---

### 5) Qualidade operacional não validada no ambiente atual (warning)
**Onde:** execução local de comandos

**Observação:**
- `yarn lint` não executou porque o lockfile/dependências não puderam ser resolvidos no ambiente (erro 403 no `yarn install`).

**Recomendação:**
- Verificar configuração de registry/autenticação do Yarn no ambiente CI/local.
- Garantir que lint/test sejam executados no pipeline para prevenir regressões.

## Pontos positivos
- Boa separação de responsabilidades entre rotas, providers e páginas principais.
- Uso consistente de `react-hook-form` + `zodResolver` para validação.
- React Query aplicado com `staleTime` e `placeholderData`, melhorando UX de carregamento em stats.
