# Svelte Integration Components

Componentes Svelte optimizados para usar como Islands en Astro.

## Instalación

```bash
npx astro add svelte
```

## Ventajas de Svelte en Astro

- **Bundle mínimo** (~2KB compilado)
- **Transiciones nativas** (fade, fly, slide, scale)
- **Animaciones fluidas** (flip, spring, tweened)
- **Reactivity compilada** (sin virtual DOM)
- **Stores nativos** para estado

## Componentes Disponibles

### Counter

Contador simple con estilos Tailwind.

```astro
---
import Counter from '@wendermedia/astro-components/integrations/svelte/Counter.svelte';
---

<Counter client:visible />
```

Props:
- `initial` (number, default: 0) - Valor inicial

### Toast

Sistema de notificaciones con animaciones nativas de Svelte.

```astro
---
import Toast from '@wendermedia/astro-components/integrations/svelte/Toast.svelte';
---

<!-- Incluir una vez en el layout -->
<Toast position="top-right" client:load />

<script>
  // Usar desde cualquier parte
  window.toast.success('Operación exitosa');
  window.toast.error('Algo salió mal');
  window.toast.warning('Ten cuidado');
  window.toast.info('Para tu información');

  // Con duración personalizada (ms)
  window.toast.success('Mensaje', 10000);

  // Sin auto-dismiss (duration = 0)
  window.toast.info('Permanente', 0);
</script>
```

Props:
- `position` ('top-right' | 'top-left' | 'bottom-right' | 'bottom-left', default: 'top-right')

Tipos de toast:
- `success` - Fondo verde con icono de check
- `error` - Fondo rojo con icono X
- `warning` - Fondo amarillo con icono de advertencia
- `info` - Fondo azul con icono de información

## Animaciones Svelte

Svelte incluye animaciones potentes out-of-the-box:

### Transiciones

```svelte
<script>
  import { fade, fly, slide, scale, blur, draw } from 'svelte/transition';
  let visible = true;
</script>

<!-- Fade simple -->
{#if visible}
  <div transition:fade>Aparece/desaparece</div>
{/if}

<!-- Fly desde dirección -->
{#if visible}
  <div in:fly={{ y: 200, duration: 500 }} out:fade>
    Entra volando, sale con fade
  </div>
{/if}

<!-- Slide accordion -->
{#if visible}
  <div transition:slide={{ duration: 300 }}>
    Contenido colapsable
  </div>
{/if}
```

### Animaciones de Lista (FLIP)

```svelte
<script>
  import { flip } from 'svelte/animate';
  let items = [1, 2, 3, 4, 5];
</script>

{#each items as item (item)}
  <div animate:flip={{ duration: 300 }}>
    {item}
  </div>
{/each}
```

### Springs y Tweened

```svelte
<script>
  import { spring, tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  // Spring para movimiento físico
  const coords = spring({ x: 0, y: 0 }, {
    stiffness: 0.1,
    damping: 0.25
  });

  // Tweened para valores numéricos
  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut
  });
</script>

<div style="transform: translate({$coords.x}px, {$coords.y}px)">
  Sigue el mouse
</div>

<progress value={$progress}></progress>
```

## Stores en Svelte

### Store Simple

```svelte
<script>
  import { writable, derived } from 'svelte/store';

  // Store escribible
  const count = writable(0);

  // Store derivado
  const doubled = derived(count, $count => $count * 2);
</script>

<p>Count: {$count}</p>
<p>Doubled: {$doubled}</p>
<button on:click={() => $count++}>+1</button>
```

### Store Compartido

```typescript
// stores/user.ts
import { writable } from 'svelte/store';

export interface User {
  id: string;
  name: string;
  email: string;
}

function createUserStore() {
  const { subscribe, set, update } = writable<User | null>(null);

  return {
    subscribe,
    login: (user: User) => set(user),
    logout: () => set(null),
    updateName: (name: string) => update(u => u ? { ...u, name } : null),
  };
}

export const user = createUserStore();
```

## Client Directives

```astro
<!-- Carga inmediatamente (toast notifications) -->
<Toast client:load />

<!-- Carga cuando visible (componentes below the fold) -->
<Counter client:visible />

<!-- Solo Svelte, sin SSR -->
<AnimatedWidget client:only="svelte" />
```

## Integración con Nanostores

Svelte funciona perfectamente con nanostores para compartir estado con otros frameworks:

```svelte
<script>
  import { $cartCount } from '../stores/cart';
</script>

<span>Items in cart: {$cartCount}</span>
```

## Rendimiento

Svelte compila a JavaScript vanilla, eliminando el overhead del framework:

```
┌─────────────────────────────────────┐
│        BUNDLE SIZE COMPARISON       │
├─────────────────────────────────────┤
│ Svelte Counter    ~0.5 KB           │
│ React Counter     ~40 KB + ~1 KB    │
│ Vue Counter       ~35 KB + ~1 KB    │
└─────────────────────────────────────┘
```

## Best Practices

1. **Usa Svelte para animaciones** - Las transiciones nativas son más eficientes
2. **Componentes pequeños** - Ideal para widgets interactivos
3. **Evita props complejos** - Svelte serializa props, mantén la data simple
4. **Prefiere stores nativos** - Los stores de Svelte son muy ligeros
