<script lang="ts">
  /**
   * Svelte Counter Component
   * Ultra-ligero, compiled to vanilla JS
   */

  export let initialValue: number = 0;
  export let step: number = 1;
  export let min: number = -Infinity;
  export let max: number = Infinity;
  export let label: string = 'Counter';

  let count = initialValue;

  $: canDecrement = count > min;
  $: canIncrement = count < max;

  function increment() {
    if (canIncrement) {
      count = Math.min(count + step, max);
    }
  }

  function decrement() {
    if (canDecrement) {
      count = Math.max(count - step, min);
    }
  }
</script>

<div class="inline-flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
  <span class="text-sm font-medium text-gray-700">{label}</span>

  <div class="flex items-center gap-2">
    <button
      on:click={decrement}
      disabled={!canDecrement}
      class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      aria-label="Decrease"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
      </svg>
    </button>

    <span class="w-12 text-center text-xl font-bold text-gray-900">
      {count}
    </span>

    <button
      on:click={increment}
      disabled={!canIncrement}
      class="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      aria-label="Increase"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  </div>
</div>
