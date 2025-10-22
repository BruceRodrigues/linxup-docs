# 📚 BigCommerce Headless Documentation

Documentação completa do projeto BigCommerce Headless, construída com Docusaurus.

## 🚀 Executando a Documentação

### Desenvolvimento

```bash
# Na raiz do projeto
yarn docs:dev

# Ou diretamente na pasta docs
cd docs
yarn start
```

A documentação estará disponível em `http://localhost:3000`

### Produção

```bash
# Build da documentação
yarn docs:build

# Servir localmente
yarn docs:serve
```

## 📁 Estrutura

```
docs/
├── docs/                    # Páginas de documentação
│   ├── getting-started/     # Guias de início
│   ├── components/          # Documentação de componentes
│   ├── integration/         # Guias de integração
│   ├── deployment/          # Deploy e produção
│   └── guides/              # Guias avançados
├── src/
│   ├── css/                 # Estilos customizados
│   └── pages/               # Páginas adicionais
├── static/                  # Assets estáticos
└── docusaurus.config.ts     # Configuração do Docusaurus
```

## 🎨 Design System

A documentação utiliza as cores do projeto definidas em `base.css`:

- **Primary**: #0055b8 (Azul)
- **Secondary**: #ff9e18 (Laranja)
- **Text**: #444444 (Cinza escuro)

## 📝 Adicionando Conteúdo

### Nova Página

1. Crie o arquivo `.md` na pasta apropriada
2. Adicione a referência no `sidebars.ts`
3. Use frontmatter para metadados:

```markdown
---
title: Título da Página
description: Descrição da página
---

# Conteúdo da página
```

### Novo Componente

1. Crie a pasta do componente
2. Adicione os arquivos `.tsx` e `.module.css`
3. Documente no `components/`

## 🔧 Configuração

### Cores

As cores são definidas em `src/css/custom.css` usando as variáveis do projeto.

### Menu Lateral

Configure o menu em `sidebars.ts` com categorias e subcategorias.

### Navegação

Configure a navbar em `docusaurus.config.ts`.

## 📚 Recursos

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)

---

**Precisa de ajuda?** Consulte nossa [seção de FAQ](./docs/faq.md) ou entre em contato com a equipe.
