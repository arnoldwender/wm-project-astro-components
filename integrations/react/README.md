# React Integration Components

Componentes React listos para usar como Islands en Astro.

## Instalación

```bash
npx astro add react
```

## Componentes Disponibles

### Counter

```astro
---
import Counter from '@wendermedia/astro-components/integrations/react/Counter';
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

### Modal

```astro
---
import Modal from '@wendermedia/astro-components/integrations/react/Modal';
---

<!-- Necesitas un wrapper para manejar el estado -->
<script>
  // O usar un componente React que maneje el estado
</script>
```

O crear un wrapper:

```tsx
// ModalWrapper.tsx
import { useState } from 'react';
import Modal from './Modal';

export default function ModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="My Modal"
      >
        <p>Modal content here</p>
      </Modal>
    </>
  );
}
```

### Tabs

```astro
---
import Tabs from '@wendermedia/astro-components/integrations/react/Tabs';

const tabs = [
  { id: 'tab1', label: 'Tab 1', content: <p>Content 1</p> },
  { id: 'tab2', label: 'Tab 2', content: <p>Content 2</p> },
  { id: 'tab3', label: 'Tab 3', content: <p>Content 3</p>, disabled: true },
];
---

<Tabs tabs={tabs} variant="pills" client:visible />
```

Variantes:
- `underline` (default)
- `pills`
- `boxed`

### Accordion

```astro
---
import Accordion from '@wendermedia/astro-components/integrations/react/Accordion';

const items = [
  { id: '1', title: 'Section 1', content: <p>Content 1</p>, defaultOpen: true },
  { id: '2', title: 'Section 2', content: <p>Content 2</p> },
  { id: '3', title: 'Section 3', content: <p>Content 3</p> },
];
---

<Accordion
  items={items}
  allowMultiple={false}
  variant="bordered"
  client:visible
/>
```

Variantes:
- `default` - Sin bordes, solo divisores
- `bordered` - Con borde exterior
- `separated` - Items separados con borde individual

## Client Directives

```astro
<!-- Carga inmediatamente -->
<Counter client:load />

<!-- Carga cuando el browser está idle -->
<Tabs client:idle />

<!-- Carga cuando entra en viewport -->
<Accordion client:visible />

<!-- Solo en móvil -->
<Modal client:media="(max-width: 768px)" />
```

## Styling

Los componentes usan Tailwind CSS. Asegúrate de tener Tailwind configurado:

```bash
npx astro add tailwind
```

Para estilos personalizados, puedes:

1. Override con CSS global
2. Pasar className prop (si está soportado)
3. Copiar y modificar el componente
