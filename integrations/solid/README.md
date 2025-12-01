# Solid Integration Components

Componentes SolidJS de alto rendimiento para usar como Islands en Astro.

## Instalación

```bash
npx astro add solid-js
```

## Ventajas de Solid en Astro

- **Reactividad fine-grained** (solo actualiza lo necesario)
- **Bundle pequeño** (~7KB)
- **Sin Virtual DOM** (compilado a operaciones DOM directas)
- **Signals nativos** (sin hooks rules)
- **Rendimiento excepcional** (top en benchmarks)

## Componentes Disponibles

### Counter

Contador con signals y controles min/max.

```astro
---
import Counter from '@wendermedia/astro-components/integrations/solid/Counter';
---

<Counter
  initialValue={0}
  step={1}
  min={0}
  max={100}
  label="Quantity"
  client:visible
/>
```

Props:
- `initialValue` (number, default: 0)
- `step` (number, default: 1)
- `min` (number, default: -Infinity)
- `max` (number, default: Infinity)
- `label` (string, optional)

### Toggle

Switch accesible con múltiples tamaños.

```astro
---
import Toggle from '@wendermedia/astro-components/integrations/solid/Toggle';
---

<Toggle
  label="Notifications"
  description="Receive email notifications"
  defaultChecked={true}
  size="md"
  onChange={(checked) => console.log(checked)}
  client:visible
/>
```

Props:
- `defaultChecked` (boolean, default: false)
- `label` (string, optional)
- `description` (string, optional)
- `disabled` (boolean, default: false)
- `size` ('sm' | 'md' | 'lg', default: 'md')
- `onChange` ((checked: boolean) => void, optional)

### Tabs

Tabs con navegación por teclado y 3 variantes.

```astro
---
import Tabs from '@wendermedia/astro-components/integrations/solid/Tabs';

const tabs = [
  { id: 'tab1', label: 'Overview', content: <p>Overview content</p> },
  { id: 'tab2', label: 'Features', content: <p>Features content</p> },
  { id: 'tab3', label: 'Pricing', content: <p>Pricing content</p>, disabled: true },
];
---

<Tabs
  tabs={tabs}
  variant="pills"
  fullWidth={false}
  onChange={(tabId) => console.log('Tab:', tabId)}
  client:visible
/>
```

Props:
- `tabs` (Tab[]) - Array de tabs con id, label, content, disabled?, icon?
- `defaultTab` (string, optional) - ID del tab activo inicial
- `variant` ('underline' | 'pills' | 'boxed', default: 'underline')
- `fullWidth` (boolean, default: false)
- `onChange` ((tabId: string) => void, optional)

### SearchInput

Input de búsqueda con debounce y loading state.

```astro
---
import SearchInput from '@wendermedia/astro-components/integrations/solid/SearchInput';
---

<SearchInput
  placeholder="Search products..."
  debounceMs={300}
  minLength={2}
  onSearch={(query) => fetchResults(query)}
  onClear={() => clearResults()}
  autofocus={true}
  client:load
/>
```

Props:
- `placeholder` (string, default: 'Search...')
- `debounceMs` (number, default: 300)
- `minLength` (number, default: 1)
- `onSearch` ((query: string) => void, optional)
- `onClear` (() => void, optional)
- `autofocus` (boolean, default: false)
- `disabled` (boolean, default: false)

## Solid Fundamentals

### Signals (Estado Básico)

```tsx
import { createSignal } from 'solid-js';

function Counter() {
  // createSignal retorna [getter, setter]
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount(count() + 1)}>
      Count: {count()}
    </button>
  );
}
```

### Effects (Side Effects)

```tsx
import { createSignal, createEffect, onCleanup } from 'solid-js';

function Timer() {
  const [seconds, setSeconds] = createSignal(0);

  createEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    // Cleanup cuando el effect se re-ejecuta o el componente se desmonta
    onCleanup(() => clearInterval(id));
  });

  return <span>Seconds: {seconds()}</span>;
}
```

### Derived State (Memos)

```tsx
import { createSignal, createMemo } from 'solid-js';

function PriceCalculator() {
  const [price, setPrice] = createSignal(100);
  const [quantity, setQuantity] = createSignal(1);

  // Solo se recalcula cuando price o quantity cambian
  const total = createMemo(() => price() * quantity());
  const tax = createMemo(() => total() * 0.21);

  return <span>Total: €{total() + tax()}</span>;
}
```

### Control Flow

```tsx
import { Show, For, Switch, Match } from 'solid-js';

function UserList(props) {
  return (
    <div>
      {/* Condicional */}
      <Show when={props.isLoading} fallback={<p>Loaded!</p>}>
        <Spinner />
      </Show>

      {/* Lista */}
      <For each={props.users}>
        {(user, index) => (
          <div>{index()}: {user.name}</div>
        )}
      </For>

      {/* Switch */}
      <Switch fallback={<p>Unknown status</p>}>
        <Match when={props.status === 'success'}>
          <SuccessMessage />
        </Match>
        <Match when={props.status === 'error'}>
          <ErrorMessage />
        </Match>
      </Switch>
    </div>
  );
}
```

### Stores (Estado Complejo)

```tsx
import { createStore } from 'solid-js/store';

function TodoApp() {
  const [state, setState] = createStore({
    todos: [],
    filter: 'all',
  });

  const addTodo = (text: string) => {
    setState('todos', (todos) => [...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id: number) => {
    setState('todos', (todo) => todo.id === id, 'done', (done) => !done);
  };

  return (
    <For each={state.todos}>
      {(todo) => (
        <div onClick={() => toggleTodo(todo.id)}>
          {todo.text} - {todo.done ? '✓' : '○'}
        </div>
      )}
    </For>
  );
}
```

## Client Directives

```astro
<!-- Carga inmediatamente (search input) -->
<SearchInput client:load />

<!-- Carga cuando visible -->
<Tabs client:visible />

<!-- Solo en cliente, sin SSR -->
<InteractiveChart client:only="solid-js" />
```

## Integración con Nanostores

Solid funciona perfectamente con nanostores:

```tsx
import { useStore } from '@nanostores/solid';
import { $cartItems, $cartCount } from '../stores/cart';

function CartIcon() {
  const cartCount = useStore($cartCount);

  return (
    <div class="relative">
      <ShoppingCartIcon />
      <Show when={cartCount() > 0}>
        <span class="badge">{cartCount()}</span>
      </Show>
    </div>
  );
}
```

## Rendimiento

Solid es consistentemente uno de los frameworks más rápidos:

```
┌─────────────────────────────────────────────────┐
│           JS FRAMEWORK BENCHMARK                │
├─────────────────────────────────────────────────┤
│ Solid      ██░░░░░░░░░░░░░░░░░░░░░░░  1.05x    │
│ Vanilla    █░░░░░░░░░░░░░░░░░░░░░░░░  1.00x    │
│ Svelte     ███░░░░░░░░░░░░░░░░░░░░░░  1.15x    │
│ Vue        ████████░░░░░░░░░░░░░░░░░  1.35x    │
│ React      ████████████░░░░░░░░░░░░░  1.55x    │
│                                                 │
│ * Basado en js-framework-benchmark              │
│ * Menor es mejor (multiplicador vs vanilla)     │
└─────────────────────────────────────────────────┘
```

## Best Practices

1. **Usa Signals para todo** - No necesitas useState/useEffect patterns
2. **Evita destructuring de props** - Rompe la reactividad
3. **Prefiere `<Show>` sobre ternarios** - Mejor rendimiento
4. **Usa `<For>` con key** - El primer argumento del callback es el item
5. **createMemo para cálculos costosos** - Se cachea automáticamente

```tsx
// ❌ MAL - Rompe reactividad
function Bad({ count }) {
  return <span>{count}</span>;
}

// ✅ BIEN - Mantiene reactividad
function Good(props) {
  return <span>{props.count}</span>;
}
```
