# Lendo com Jesus

Site institucional de uma comunidade cristã, construído com Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 e Framer Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
src/
  app/            # rotas, layout, metadata, sitemap, robots, OG image
  components/
    ui/           # botões, placeholders, componentes de apoio (Reveal, VerseMark)
    layout/       # Header e Footer
    sections/     # cada seção da landing page, isolada
  lib/            # utilitários e configuração do site (links, nav)
```

## Antes de publicar

- Troque os placeholders de imagem (`ImagePlaceholder`) pelas fotografias reais em `src/components/sections/hero.tsx` e `story.tsx`.
- Atualize os links de contato em `src/lib/site-config.ts` (WhatsApp, Instagram, e-mail).
- Ajuste o texto de "Minha história" em `src/components/sections/story.tsx`.
- Atualize a URL do site em `src/app/layout.tsx`, `robots.ts` e `sitemap.ts`.

## Deploy

Pronto para deploy direto na Vercel: conecte o repositório do GitHub e a Vercel detecta o Next.js automaticamente. Nenhuma variável de ambiente é necessária (não há banco de dados, login ou pagamentos no MVP).
