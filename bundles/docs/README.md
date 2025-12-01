# Documentation Bundle

Stack completo para documentación usando Starlight.

## Características

- ✅ Starlight theme oficial
- ✅ Search integrado (Pagefind)
- ✅ Multi-idioma (DE/EN/ES)
- ✅ Dark/Light mode
- ✅ Sidebar autogenerada
- ✅ Table of contents
- ✅ Edit links a GitHub

## Estructura

```
src/
├── content/
│   └── docs/
│       ├── guides/
│       │   ├── introduction.md
│       │   ├── installation.md
│       │   └── quickstart.md
│       ├── concepts/
│       │   └── *.md
│       ├── api/
│       │   └── *.md
│       └── examples/
│           └── *.md
├── assets/
│   └── logo.svg
└── styles/
    └── custom.css
```

## Crear una página

```markdown
---
title: Mi Página
description: Descripción para SEO
sidebar:
  order: 1
  badge:
    text: Nuevo
    variant: tip
---

# Mi Página

Contenido aquí...

:::note
Esto es una nota.
:::

:::tip
Esto es un tip.
:::

:::caution
Esto es una advertencia.
:::

:::danger
Esto es peligroso.
:::
```

## Componentes Starlight

```mdx
import { Tabs, TabItem } from '@astrojs/starlight/components';
import { Card, CardGrid } from '@astrojs/starlight/components';

<Tabs>
  <TabItem label="npm">npm install package</TabItem>
  <TabItem label="pnpm">pnpm add package</TabItem>
  <TabItem label="yarn">yarn add package</TabItem>
</Tabs>

<CardGrid>
  <Card title="Guía" icon="document">
    Aprende los conceptos básicos.
  </Card>
  <Card title="API" icon="puzzle">
    Referencia completa de la API.
  </Card>
</CardGrid>
```

## Traducciones

Estructura para contenido traducido:

```
src/content/docs/
├── guides/           # Alemán (default)
│   └── intro.md
├── en/
│   └── guides/       # Inglés
│       └── intro.md
└── es/
    └── guides/       # Español
        └── intro.md
```
