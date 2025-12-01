<script setup lang="ts">
/**
 * Vue Dropdown Component
 * Dropdown accesible con keyboard navigation
 */

import { ref, computed, onMounted, onUnmounted } from 'vue';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface Props {
  options: Option[];
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select an option',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  change: [value: string];
}>();

const isOpen = ref(false);
const highlightedIndex = ref(-1);
const containerRef = ref<HTMLDivElement>();
const buttonRef = ref<HTMLButtonElement>();
const listRef = ref<HTMLUListElement>();

const selectedOption = computed(() =>
  props.options.find((opt) => opt.value === props.modelValue)
);

const enabledOptions = computed(() =>
  props.options.filter((opt) => !opt.disabled)
);

function toggle() {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    highlightedIndex.value = props.options.findIndex(
      (opt) => opt.value === props.modelValue
    );
  }
}

function close() {
  isOpen.value = false;
  highlightedIndex.value = -1;
}

function select(option: Option) {
  if (option.disabled) return;
  emit('update:modelValue', option.value);
  emit('change', option.value);
  close();
  buttonRef.value?.focus();
}

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      toggle();
    }
    return;
  }

  switch (e.key) {
    case 'Escape':
      e.preventDefault();
      close();
      buttonRef.value?.focus();
      break;
    case 'ArrowDown':
      e.preventDefault();
      highlightedIndex.value = Math.min(
        highlightedIndex.value + 1,
        props.options.length - 1
      );
      break;
    case 'ArrowUp':
      e.preventDefault();
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0);
      break;
    case 'Enter':
    case ' ':
      e.preventDefault();
      if (highlightedIndex.value >= 0) {
        select(props.options[highlightedIndex.value]);
      }
      break;
    case 'Home':
      e.preventDefault();
      highlightedIndex.value = 0;
      break;
    case 'End':
      e.preventDefault();
      highlightedIndex.value = props.options.length - 1;
      break;
  }
}

function handleClickOutside(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    close();
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div ref="containerRef" class="relative inline-block w-full max-w-xs">
    <button
      ref="buttonRef"
      type="button"
      :disabled="disabled"
      @click="toggle"
      @keydown="handleKeydown"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      class="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <span :class="{ 'text-gray-500': !selectedOption }">
        {{ selectedOption?.label || placeholder }}
      </span>
      <svg
        class="w-5 h-5 text-gray-400 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <ul
        v-if="isOpen"
        ref="listRef"
        role="listbox"
        :aria-activedescendant="highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined"
        class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto"
      >
        <li
          v-for="(option, index) in options"
          :key="option.value"
          :id="`option-${index}`"
          role="option"
          :aria-selected="option.value === modelValue"
          :aria-disabled="option.disabled"
          @click="select(option)"
          @mouseenter="highlightedIndex = index"
          :class="[
            'px-4 py-2 cursor-pointer transition-colors',
            {
              'bg-green-50 text-green-900': highlightedIndex === index,
              'text-gray-900': highlightedIndex !== index && !option.disabled,
              'text-gray-400 cursor-not-allowed': option.disabled,
              'font-medium': option.value === modelValue,
            },
          ]"
        >
          {{ option.label }}
        </li>
      </ul>
    </Transition>
  </div>
</template>
