<script setup lang="ts">
/**
 * Vue Counter Component
 * Ejemplo de componente interactivo con Vue
 */

import { ref, computed } from 'vue';

interface Props {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  initialValue: 0,
  step: 1,
  min: -Infinity,
  max: Infinity,
  label: 'Counter',
});

const emit = defineEmits<{
  change: [value: number];
}>();

const count = ref(props.initialValue);

const canDecrement = computed(() => count.value > props.min);
const canIncrement = computed(() => count.value < props.max);

function increment() {
  if (canIncrement.value) {
    count.value = Math.min(count.value + props.step, props.max);
    emit('change', count.value);
  }
}

function decrement() {
  if (canDecrement.value) {
    count.value = Math.max(count.value - props.step, props.min);
    emit('change', count.value);
  }
}
</script>

<template>
  <div class="inline-flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
    <span class="text-sm font-medium text-gray-700">{{ label }}</span>

    <div class="flex items-center gap-2">
      <button
        @click="decrement"
        :disabled="!canDecrement"
        class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
        </svg>
      </button>

      <span class="w-12 text-center text-xl font-bold text-gray-900">
        {{ count }}
      </span>

      <button
        @click="increment"
        :disabled="!canIncrement"
        class="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Increase"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  </div>
</template>
