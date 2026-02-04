**Atomic Design para Astro**  
Basado en tu documentación de Brad Frost:  
  
```
src/
├── components/
│   ├── atoms/           # Elementos básicos indivisibles
│   │   ├── Button.astro
│   │   ├── Input.astro
│   │   ├── Label.astro
│   │   ├── Icon.astro
│   │   ├── Image.astro
│   │   ├── Link.astro
│   │   ├── Heading.astro
│   │   ├── Text.astro
│   │   └── Badge.astro
│   │
│   ├── molecules/       # Grupos de átomos funcionando juntos
│   │   ├── SearchBar.astro      # Input + Button + Icon
│   │   ├── NavLink.astro        # Link + Icon
│   │   ├── FormField.astro      # Label + Input + Error
│   │   ├── Card.astro           # Image + Heading + Text
│   │   ├── SocialLinks.astro    # Link + Icon (múltiples)
│   │   ├── Breadcrumbs.astro    # Link + Icon + Text
│   │   └── Pagination.astro     # Button + Text + Icon
│   │
│   ├── organisms/       # Secciones complejas de UI
│   │   ├── Header.astro         # Logo + Navigation + SearchBar
│   │   ├── Footer.astro         # Logo + NavLinks + SocialLinks
│   │   ├── Navigation.astro     # NavLink (múltiples) + Button
│   │   ├── Hero.astro           # Heading + Text + Button + Image
│   │   ├── ContactForm.astro    # FormField (múltiples) + Button
│   │   ├── PortfolioGrid.astro  # Card (múltiples) + Pagination
│   │   ├── Testimonials.astro   # Card (múltiples)
│   │   └── Gallery.astro        # Image (múltiples) + Lightbox
│   │
│   └── seo/             # SEO (categoría especial)
│       └── SEO.astro
│
├── layouts/             # Templates (estructura de página)
│   ├── BaseLayout.astro         # HTML + Head + Header + Footer
│   ├── BlogLayout.astro         # BaseLayout + Sidebar
│   └── PortfolioLayout.astro    # BaseLayout + Gallery styles
│
├── pages/               # Pages (contenido real)
│   ├── index.astro
│   ├── contacto.astro
│   └── portafolio/[slug].astro
│
├── data/                # Contenido separado del código
│   ├── projects.ts
│   └── testimonials.ts
│
├── lib/                 # Lógica compartida
│   ├── constants.ts
│   ├── animations.ts
│   └── utils.ts
│
├── styles/              # Tokens de diseño
│   ├── global.css
│   └── tokens/
│       ├── colors.css
│       ├── typography.css
│       └── spacing.css
│
└── types/               # TypeScript
    └── index.ts

```
  
**Jerarquía Visual**  
  
```
┌─────────────────────────────────────────────────────────────┐
│  PAGE (index.astro)                                         │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  TEMPLATE (BaseLayout.astro)                          │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │  ORGANISM (Header)                              │  │  │
│  │  │  ┌──────────┐ ┌─────────────────┐ ┌──────────┐  │  │  │
│  │  │  │ MOLECULE │ │    MOLECULE     │ │ MOLECULE │  │  │  │
│  │  │  │  (Logo)  │ │  (Navigation)   │ │(SearchBar│  │  │  │
│  │  │  │ ┌──────┐ │ │ ┌────┐ ┌────┐   │ │┌───┐┌───┐│  │  │  │
│  │  │  │ │ ATOM │ │ │ │ATOM│ │ATOM│   │ ││ATM││ATM││  │  │  │
│  │  │  │ │Image │ │ │ │Link│ │Link│   │ ││Inp││Btn││  │  │  │
│  │  │  │ └──────┘ │ │ └────┘ └────┘   │ │└───┘└───┘│  │  │  │
│  │  │  └──────────┘ └─────────────────┘ └──────────┘  │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │  ORGANISM (Hero)                                │  │  │
│  │  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌──────────┐  │  │  │
│  │  │  │  ATOM  │ │  ATOM  │ │  ATOM  │ │   ATOM   │  │  │  │
│  │  │  │Heading │ │  Text  │ │ Button │ │  Image   │  │  │  │
│  │  │  └────────┘ └────────┘ └────────┘ └──────────┘  │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

```
  
**Ejemplo Práctico**  
**Atom: Button.astro**  
  
```
---
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}
const { variant = 'primary', size = 'md', href } = Astro.props;
const Tag = href ? 'a' : 'button';
---
<Tag href={href} class:list={['btn', `btn-${variant}`, `btn-${size}`]}>
  <slot />
</Tag>

```
**Molecule: SearchBar.astro**  
  
```
---
import Input from '../atoms/Input.astro';
import Button from '../atoms/Button.astro';
import Icon from '../atoms/Icon.astro';
---
<form class="search-bar">
  <Input type="search" placeholder="Buscar..." />
  <Button variant="primary">
    <Icon name="search" />
  </Button>
</form>

```
**Organism: Header.astro**  
  
```
---
import Logo from '../molecules/Logo.astro';
import Navigation from '../molecules/Navigation.astro';
import SearchBar from '../molecules/SearchBar.astro';
---
<header>
  <Logo />
  <Navigation />
  <SearchBar />
</header>

```
  
**Regla de Oro**  
**Un cambio en un ÁTOMO afecta TODO lo que lo usa.**  
Si cambias el color del Button.astro, automáticamente cambia en:  
* SearchBar → Header → BaseLayout → TODAS las páginas  
Esto es el poder del **Design System con Atomic Design**.  
y el repositorio mencionado no sigue esas patterns?  
  
**Bash **Show components structure  
```
IN

```
```
tree /Users/arnold/Development/wolfrw-astro-2025/src/components -L 2 --dirsfirst 2>/dev/null

```
  
```
OUT

```
```
/Users/arnold/Development/wolfrw-astro-2025/src/components
├── forms
│   └── ContactForm.tsx
├── layout
│   ├── Footer.astro
│   └── Header.astro
├── portfolio
│   ├── BeforeAfter.tsx
│   ├── GalleryWithLightbox.astro
│   ├── Lightbox.tsx
│   ├── PortfolioGrid.tsx
│   └── ProjectCard.astro
├── sections
│   ├── Hero.astro
│   ├── InfiniteGallery.astro
│   └── InstagramFeed.astro
├── seo
│   └── SEO.astro
├── ui
│   └── Lightbox.tsx
├── BeforeAfter.astro
├── Footer.astro
├── FullscreenHero.tsx
├── Header.astro
├── HeroRotating.tsx
├── PortfolioGrid.tsx
├── ProjectGallery.tsx
└── Welcome.astro

7 directories, 21 files

```
  
*   
*   
  
No, **wolfrw-astro-2025 NO sigue Atomic Design**. Usa una organización por **dominio/feature**:  
**Estructura Actual (Por Dominio)**  
  
```
components/
├── forms/        # Por función
├── layout/       # Por tipo
├── portfolio/    # Por feature
├── sections/     # Por ubicación en página
├── seo/          # Por función
├── ui/           # Por tipo
└── *.astro       # Componentes sueltos (desordenados)

```
**Problemas de esta Estructura**  

| Problema            | Ejemplo                                        |
| ------------------- | ---------------------------------------------- |
| Sin jerarquía clara | ¿ProjectCard es átomo, molécula u organismo?   |
| Componentes sueltos | 8 archivos en raíz sin categorizar             |
| Duplicación         | Footer.astro existe en raíz Y en layout/       |
| Inconsistencia      | Header.astro en raíz Y en layout/              |
| No hay átomos       | No hay Button.astro, Input.astro reutilizables |
  
****Comparación****  

| Atomic Design             | wolfrw-astro-2025           |
| ------------------------- | --------------------------- |
| atoms/Button.astro        | ❌ No existe                 |
| atoms/Input.astro         | ❌ No existe                 |
| molecules/SearchBar.astro | ❌ No existe                 |
| molecules/Card.astro      | portfolio/ProjectCard.astro |
| organisms/Header.astro    | layout/Header.astro ✓       |
| organisms/Hero.astro      | sections/Hero.astro ✓       |
  
****Veredicto****  
El proyecto tiene **buena separación de concerns** pero NO es Atomic Design. Es una mezcla de:  
* **Feature-based** (portfolio, forms)  
* **Type-based** (layout, ui, sections)  
¿Quieres que reorganice el proyecto siguiendo Atomic Design correctamente?  
  
