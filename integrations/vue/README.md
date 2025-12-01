# Vue Integration Components

Componentes Vue listos para usar como Islands en Astro.

## Instalación

```bash
npx astro add vue
```

## Componentes Disponibles

### Counter

```astro
---
import Counter from '@wendermedia/astro-components/integrations/vue/Counter.vue';
---

<Counter
  :initial-value="0"
  :step="1"
  :min="0"
  :max="100"
  label="Quantity"
  client:visible
/>
```

### Dropdown

```astro
---
import Dropdown from '@wendermedia/astro-components/integrations/vue/Dropdown.vue';

const options = [
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' },
  { value: 'opt3', label: 'Option 3', disabled: true },
];
---

<Dropdown
  :options="options"
  placeholder="Select..."
  client:visible
/>
```

## v-model con Astro

Vue v-model no funciona directamente en Astro. Para estado:

```vue
<!-- Wrapper.vue -->
<script setup>
import { ref } from 'vue';
import Dropdown from './Dropdown.vue';

const selected = ref('');
const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
];
</script>

<template>
  <div>
    <Dropdown v-model="selected" :options="options" />
    <p>Selected: {{ selected }}</p>
  </div>
</template>
```

## Transiciones Vue

Las transiciones de Vue funcionan normalmente:

```vue
<Transition name="fade">
  <div v-if="show">Content</div>
</Transition>
```

## Composables

Puedes usar composables de Vue:

```vue
<script setup>
import { useLocalStorage } from '@vueuse/core';

const theme = useLocalStorage('theme', 'light');
</script>
```

## Client Directives

```astro
<Counter client:load />
<Dropdown client:visible />
<MyComponent client:idle />
```
